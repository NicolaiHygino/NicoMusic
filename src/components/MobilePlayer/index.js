import React, { useState, useEffect, useContext } from 'react';
import Loading from 'components/Loading';
import TrackInfo from './TrackInfo';
import MainControls from './MainControls';
import HiddenPlayer from './HiddenPlayer';
import NextArrowIcon from 'assets/Icons/NextArrowIcon';
import { UriContext } from 'context/UriContext';
import { useAuth } from 'context/Auth';
import { putShuffle } from 'services/spotifyApi/endpoints';
import {
  StyledPlayer,
  LoadingPlayer,
  TopBarIcon,
  TopBar,
} from './style';

const Player = () => {
  const { token } = useAuth();

  const {
    setDeviceId,
    isPaused,
    setIsPaused,
    setTrackUri
  } = useContext(UriContext);

  const [player, setPlayer] = useState(null);
  const [hidePlayer, setHidePlayer] = useState(true);
  const [ready, setReady] = useState(false);
  const [track, setTrack] = useState(null);
  const [isShuffle, setIsShuffle] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if(!player) return
    player.setVolume(volume);
  }, [volume, player]);

  const handleShuffeChange = value => {
    setIsShuffle(value);
    putShuffle(value);
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'Nico Music',
        getOAuthToken: cb => cb(token),
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
        const track = state.track_window.current_track;
        
        setIsShuffle(state.shuffle);
        setTrack(track);
        setTrackUri(track.linked_from?.uri || track.uri);
        setIsPaused(state.paused);
      });
      
      player.connect();

      return () => {
        player.removeListener('player_state_changed')
        player.removeListener('ready');
      }
    };
  }, [token, setDeviceId, setTrackUri, setIsPaused]);

  if (!ready) {
    return (
      <LoadingPlayer>
        <Loading />        
      </LoadingPlayer>
    );
  }

  return (
    <>
      <HiddenPlayer
        player={player} 
        track={track} 
        hidePlayer={hidePlayer}
        className={!hidePlayer && 'hidePlayer'}
        setHidePlayer={setHidePlayer}
      />

      <StyledPlayer className={hidePlayer && 'hidePlayer'}>
        <TopBar>
          <TopBarIcon onClick={() => setHidePlayer(!hidePlayer)}>
            <NextArrowIcon />
          </TopBarIcon>
        </TopBar>

        <TrackInfo track={track} />

        <MainControls
          player={player}
          isPaused={isPaused}
          isShuffle={isShuffle}
          onShuffleChange={handleShuffeChange}
        />
      </StyledPlayer>
    </>
  );
};

export default Player;
