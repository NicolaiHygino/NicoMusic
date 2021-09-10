import React, { useState, useEffect } from 'react';
import { playResume } from 'services/spotifyApi/endpoints';
import styled from 'styled-components';
import ShuffeIcon from 'assets/Icons/ShuffleIcon';
import PreviousIcon from 'assets/Icons/PreviousIcon';
import PlayIcon from 'assets/Icons/PlayIcon';
import PauseIcon from 'assets/Icons/PauseIcon';
import NextIcon from 'assets/Icons/NextIcon';
import RepeatIcon from 'assets/Icons/RepeatIcon';

const StyledPlayer = styled.footer`
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  bottom: 0;
  height: 90px;
  width: 100%;
  background-color: #181818;
  border-top: 1px solid #282828;
`;

const MusicInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const ImageWrapper = styled.div`
  height: 56px;
  width: 56px;

  & img {
    width: 100%;
  }
`;

const TitleWrapper = styled.div`
  margin: 0 14px;

  & p {
    font-size: 14px;
  }

  & span {
    color: #b3b3b3;
    font-size: 11px;
  }
`;

const MainControls = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const PlayerButtons = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-bottom: 12px;
`;

const IconButton = styled.button`
  color: #fff;
  background-color: rgba(0,0,0,0);
  border: 0;
  width: 32px;
  height: 32px;
  line-height: 0;
  margin: 0 4px;
  cursor: pointer;
`;

const PlayPauseButton = styled(IconButton)`
  background-color: #fff;
  border-radius: 50%;
  color: #000;
`;

const StyledBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 16px;
`;

const Duration = styled.div`
  min-width: 40px;
  text-align: center;
  font-size: 11px;
  color: #b3b3b3;
`;

const BarWrapper = styled.div`
  height: 11px;
  width: 100%;
`;

const Bar = styled.div`
  height: 4px;
  width: 100%;
  background-color: #535353;
  border-radius: 4px;
`;

const VolumeWrapper = styled.div`
  flex: 1;
`;

const TEMP_IMG = 'https://i.scdn.co/image/ab67616d00004851f54b99bf27cda88f4a7403ce';

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
    }
  ]
};

const NewPlayer = ({ token }) => {
  const [player, setPlayer] = useState(undefined);

  useEffect(() => {
    console.log('useEffect Called.')
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
        name: 'New Nico Music',
        getOAuthToken: cb => cb(token),
        volume: 0.5,
      });

      setPlayer(player);

      player.addListener('ready', ({ device_id }) => {
        console.log(`Ready with Device Id ${device_id}`);
      });

      player.addListener('not_ready', ({ device_id }) => {
        console.log(`Device ID has gone offLine ${device_id}`);
      });

      player.connect();
    };
  }, [token]);

  return (
    <StyledPlayer>
      <MusicInfo>
        <ImageWrapper>
          <img src={TEMP_IMG} alt="" />
        </ImageWrapper>
        <TitleWrapper>
          <p>goosebumps</p>
          <span>Travis Scott</span>
        </TitleWrapper>
      </MusicInfo>
      
      <MainControls>
        <PlayerButtons>
          <IconButton>
            <ShuffeIcon />
          </IconButton>
          <IconButton>
            <PreviousIcon />
          </IconButton>
          <PlayPauseButton>
            <PlayIcon />
          </PlayPauseButton>
          <IconButton>
            <NextIcon />
          </IconButton>
          <IconButton>
            <RepeatIcon />
          </IconButton>
        </PlayerButtons>

        <StyledBar>
          <Duration>
            00:00
          </Duration>
          
          <BarWrapper>
            <Bar />
          </BarWrapper>
          <Duration>
            00:00
          </Duration>
        </StyledBar>
      </MainControls>
      
      <VolumeWrapper>

      </VolumeWrapper>
    </StyledPlayer>
  );
};

export default NewPlayer;