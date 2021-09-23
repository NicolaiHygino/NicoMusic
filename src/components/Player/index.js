import React, { useState, useEffect, useContext } from 'react';
import Loading from 'components/Loading';
import TrackInfo from './TrackInfo';
import MainControls from './MainControls';
import RangeInput from './RangeInput';
import DevicesIcon from 'assets/Icons/DevicesIcon';
import VolumeIcon from 'assets/Icons/VolumeIcon';
import { UriContext } from 'context/UriContext';
import { transferUserPlayback, putShuffle } from 'services/spotifyApi/endpoints';
import { useMediaQuery } from 'hooks/useMediaQuery';
import {
  StyledPlayer,
  VolumeWrapper,
  VolumeControl,
  IconButton,
  LoadingPlayer
} from './style';

const Player = ({ token }) => {
  const { setDeviceId } = useContext(UriContext);

  const [player, setPlayer] = useState(null);
  const [ready, setReady] = useState(false);
  const [track, setTrack] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [isShuffle, setIsShuffle] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const isTablet = useMediaQuery('(max-width: 900px)');

  useEffect(() => {
    if(!player) return
    player.setVolume(volume);
  }, [volume, player]);

  const handleShuffeChange = value => {
    setIsShuffle(value);
    putShuffle(token, value);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Nico Music',
        getOAuthToken: (cb) => cb(token),
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        setDeviceId(device_id);
        player.getVolume().then((vol) => setVolume(vol));
        setReady(true);
      });

      player.addListener('player_state_changed', (state) => {
        if (!state) return;
        setIsShuffle(state.shuffle);
        setTrack(state.track_window.current_track);
        setIsPaused(state.paused);
      });
      
      player.connect();
    };
  }, [token]);

  if (!ready) {
    return (
      <LoadingPlayer>
        <Loading />
      </LoadingPlayer>
    );
  }
  return (
    <StyledPlayer>
      <TrackInfo track={track} />

      <MainControls
        player={player}
        isPaused={isPaused}
        isShuffle={isShuffle}
        onShuffleChange={handleShuffeChange}
      />

      <VolumeControl>
        {!isTablet && 
          <VolumeWrapper>
            <IconButton>
              <VolumeIcon />
            </IconButton>
            <RangeInput
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
            />
          </VolumeWrapper>
        }
      </VolumeControl> 
    </StyledPlayer>
  );
};

export default Player;
