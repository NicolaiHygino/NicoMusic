import React from 'react';
import PlayIcon from 'assets/Icons/PlayIcon';
import PauseIcon from 'assets/Icons/PauseIcon';
import NextIcon from 'assets/Icons/NextIcon';
import { StyledMainControls, IconButton } from './style';

const MobileMainControls = ({ player, isPaused }) => {
  return (
    <StyledMainControls>
      <IconButton onClick={() => player.togglePlay()}>
        {isPaused ? <PlayIcon /> : <PauseIcon />}
      </IconButton>
      <IconButton onClick={() => player.nextTrack()}>
        <NextIcon />
      </IconButton>
    </StyledMainControls>
  );
};

export default MobileMainControls;
