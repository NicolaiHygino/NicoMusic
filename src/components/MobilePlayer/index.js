import React, { useState, useEffect } from 'react';
import { transferUserPlayback } from 'services/spotifyApi/endpoints';
import MobileTrackInfo from './MobileTrackInfo';
import MobileMainControls from './MobileMainControls';
import { StyledMobilePlayer } from './style';

const MobilePlayer = ({ token }) => {
  const [player, setPlayer] = useState(null);
  const [track, setTrack] = useState(null);
  const [isPaused, setIsPaused] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'New Nico Music',
        getOAuthToken: (cb) => cb(token),
        volume: 1,
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        transferUserPlayback(token, device_id);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log(`Device ID has gone offLine ${device_id}`);
      });

      player.addListener('player_state_changed', (state) => {
        if (!state) return;
        setTrack(state.track_window.current_track);
        setIsPaused(state.paused);
      });

      player.connect();
    };
  }, [token]);

  return (
    <StyledMobilePlayer>
      <MobileTrackInfo track={track} />

      <MobileMainControls player={player} isPaused={isPaused} />
    </StyledMobilePlayer>
  );
};

export default MobilePlayer;
