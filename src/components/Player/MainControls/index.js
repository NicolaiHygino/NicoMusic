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
  track,
  isPaused,
  isShuffle,
  onShuffleChange,
  position,
  setPosition,
  onPositionChange,
}) => {
  return (
    <StyledMainControls>
      <PlayerButtons>
        <IconButton onClick={() => onShuffleChange(!isShuffle)}>
          {isShuffle
            ? <ActiveShuffleIcon />
            : <ShuffleIcon />}
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

      {track ? (
        <ProgressBar
          duration={track.duration_ms}
          isPaused={isPaused}
          position={position}
          setPosition={setPosition}
          onPositionChange={onPositionChange}
        />
      ) : (
        <ProgressBar
          duration={0}
          isPaused={isPaused}
          position={position}
          setPosition={setPosition}
          onPositionChange={onPositionChange}
        />
      )}
    </StyledMainControls>
  );
};

export default MainControls;
