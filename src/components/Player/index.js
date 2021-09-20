import React, { useState, useEffect } from 'react';
import { transferUserPlayback } from 'services/spotifyApi/endpoints';
import Loading from 'components/Loading';
import TrackInfo from './TrackInfo';
import MainControls from './MainControls';
import RangeInput from './RangeInput';
import VolumeIcon from 'assets/Icons/VolumeIcon';
import {
  StyledPlayer,
  VolumeWrapper,
  VolumeControl,
  IconButton,
  LoadingPlayer
} from './style';

const Player = ({ token }) => {
  const [player, setPlayer] = useState(null);
  const [ready, setReady] = useState(false);
  const [deviceId, setDeviceId] = useState(null);
  const [track, setTrack] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [position, setPosition] = useState(0);
  const [volume, setVolume] = useState(0.1);
  const [isShuffle, setIsShuffle] = useState(false);

  useEffect(() => {
    if(!player) return
    player.setVolume(volume);
  }, [volume, player]);

  const handleShuffeChange = value =>
    setIsShuffle(value);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'New Nico Music',
        getOAuthToken: (cb) => cb(token),
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        transferUserPlayback(token, device_id);
        setDeviceId(device_id);
        player.getVolume().then((vol) => setVolume(vol));
        setReady(true);
      });
      
      player.addListener('not_ready', ({ device_id }) => {
        console.log(`Device ID has gone offLine ${device_id}`);
      });
      
      player.addListener('player_state_changed', (state) => {
        if (!state) return;
        setIsShuffle(state.shuffle);
        setPosition(state.position);
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
        token={token}
        player={player}
        deviceId={deviceId}
        track={track}
        isPaused={isPaused}
        isShuffle={isShuffle}
        onShuffleChange={handleShuffeChange}
        position={position}
        setPosition={setPosition}
      />

      <VolumeControl>
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
      </VolumeControl>
    </StyledPlayer>
  );
};

export default Player;
