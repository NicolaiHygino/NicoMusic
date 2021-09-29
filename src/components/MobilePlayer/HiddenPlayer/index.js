import React from 'react';
import PlayIcon from 'assets/Icons/PlayIcon';
import PauseIcon from 'assets/Icons/PauseIcon';
import NextIcon from 'assets/Icons/NextIcon';
import {
  StyledHiddenPlayer,
  MusicInfo,
  ControlWrapper,
  ImageWrapper,
  TitleWrapper,
  IconButton,
} from './style'

const HiddenPlayer = ({
  player,
  track,
  isPaused,
  hidePlayer,
  setHidePlayer
}) => {
  if (!track) return <MusicInfo></MusicInfo>;
  
  return (
    <StyledHiddenPlayer onClick={() => setHidePlayer(!hidePlayer)}>
      <MusicInfo>
        <ImageWrapper>
          <img src={track.album.images[2].url} alt={track.album.name} />
        </ImageWrapper>
        <TitleWrapper>
          <p>{track.name}</p>
          <span>{track.artists[0].name}</span>
        </TitleWrapper>
      </MusicInfo>

      <ControlWrapper onClick={e => e.stopPropagation()}>
        <IconButton onClick={() => player.togglePlay()}>
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </IconButton>
        <IconButton onClick={() => player.nextTrack()}>
          <NextIcon />
        </IconButton>
      </ControlWrapper>
    </StyledHiddenPlayer>
  );
};

export default HiddenPlayer;
