import React, { useState, useEffect } from 'react';

const NewPlayer = ({ token }) => {
  const track = {
    name: '',
    album: {
      images: [
        {
          url: ''
        },
      ]
    },
    artists: [
      {
        name: ''
      },
    ],
  }

  const [player, setPlayer] = useState();
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'New Nico Music',
        getOAuthToken: cb => cb(token),
        volume: 0.5
      });
    };

  }, [token]);
  
  console.log(player)

  return (<>
  </>);
};

export default NewPlayer;