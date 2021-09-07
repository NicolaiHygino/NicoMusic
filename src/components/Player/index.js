import React, { useState, useEffect } from 'react';
import SpotifyWebPlayer from "react-spotify-web-playback/lib";
import styled from 'styled-components';

const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;

  & .rrs__range {
    background-color: #EA2027 !important;
  }
`;

const playerStyle = {
  trackNameColor: '#fff',
  color: '#fff',
  bgColor: '#141414',
  sliderColor: '#EA2027',
  sliderTrackColor: '#272727',
};

const Player = ({ uris, token }) => {
  const [play, setPlay] = useState(false);
  
  useEffect(() => {
    setPlay(true)
  }, [uris]);

  return (
    <PlayerContainer>
      <SpotifyWebPlayer
        token={token}
        initialVolume={0.5}
        styles={playerStyle}
        callback={state =>
          !state.isPlaying && setPlay(false)
        }
        play={play}
        uris={[uris]}
      />
    </PlayerContainer>
  );
};

export default Player;