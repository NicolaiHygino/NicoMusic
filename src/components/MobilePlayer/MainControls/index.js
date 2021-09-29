import React from "react";
import ProgressBar from "./ProgressBar";
import ActiveShuffleIcon from "assets/Icons/ActiveShuffleIcon";
import ShuffleIcon from "assets/Icons/ShuffleIcon";
import PreviousIcon from "assets/Icons/PreviousIcon";
import PlayIcon from "assets/Icons/PlayIcon";
import PauseIcon from "assets/Icons/PauseIcon";
import NextIcon from "assets/Icons/NextIcon";
import RepeatIcon from "assets/Icons/RepeatIcon";
import {
  StyledMainControls,
  PlayPauseButton,
  PlayerButtons,
} from "./style";
import { IconButton } from "../style";

const MainControls = ({
  player,
  isPaused,
  isShuffle,
  onShuffleChange,
}) => {
  return (
    <StyledMainControls>
      <ProgressBar player={player} isPaused={isPaused} />
      
      <PlayerButtons>
        <IconButton onClick={() => onShuffleChange(!isShuffle)}>
          {isShuffle ? <ActiveShuffleIcon /> : <ShuffleIcon />}
        </IconButton>
        <IconButton onClick={() => player.previousTrack()}>
          <PreviousIcon />
        </IconButton>
        <PlayPauseButton onClick={() => player.togglePlay()}>
          {isPaused ? <PlayIcon /> : <PauseIcon />}
        </PlayPauseButton>
        <IconButton onClick={() => player.nextTrack()}>
          <NextIcon />
        </IconButton>
        <IconButton>
          <RepeatIcon />
        </IconButton>
      </PlayerButtons>
    </StyledMainControls>
  );
};

export default MainControls;
