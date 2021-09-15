import React, { useState, useEffect } from 'react';
import MobileTrackInfo from './MobileTrackInfo';
import MobileMainControls from './MobileMainControls';
import { transferUserPlayback } from 'services/spotifyApi/endpoints';
import { StyledMobilePlayer } from './style';

const MobilePlayer = ({ token }) => {
  const [player, setPlayer] = useState(null);
  const [track, setTrack] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

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
      
      // Ready
      player.addListener('ready', ({ device_id }) => {
        transferUserPlayback(token, device_id);
      });

      player.addListener('not_ready', ({device_id}) => {
        console.log('Device is not ready for playback', device_id);
      })

      player.on('initialization_error', ({ message }) => {
        setErrorMessage(message + ' (unsuported device)');
      })
      
      player.connect()
    };
  }, [token]);

  return (
    <StyledMobilePlayer>
      <MobileTrackInfo errorMessage={errorMessage} track={track} />

      { (!errorMessage) 
        ? <MobileMainControls player={player} isPaused={isPaused} />
        : null }
    </StyledMobilePlayer>
  );
};

export default MobilePlayer;
