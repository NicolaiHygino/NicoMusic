import React from "react";
import ProgressBar from "./ProgressBar";
import ActiveShuffleIcon from "assets/Icons/ActiveShuffleIcon";
import ShuffleIcon from "assets/Icons/ShuffleIcon";
import PreviousIcon from "assets/Icons/PreviousIcon";
import PlayIcon from "assets/Icons/PlayIcon";
import PauseIcon from "assets/Icons/PauseIcon";
import NextIcon from "assets/Icons/NextIcon";
import RepeatIcon from "assets/Icons/RepeatIcon";
import { putShuffle, seekToPosition } from "services/spotifyApi/endpoints";
import {
  StyledMainControls,
  PlayPauseButton,
  PlayerButtons,
} from "./style";
import { IconButton } from "../style";

const MainControls = ({
  token,
  player,
  deviceId,
  track,
  isPaused,
  isShuffle,
  onShuffleChange,
  position,
  setPosition,
}) => {
  const handleMusicPositionChange = (newPosition) => {
    seekToPosition(token, newPosition, deviceId);
  };

  const handleShuffleClick = () => {
    console.log('clicked')
    onShuffleChange(!isShuffle);
    putShuffle(token, !isShuffle);
  }
  return (
    <StyledMainControls>
      <PlayerButtons>
        <IconButton onClick={() => handleShuffleClick()}>
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
          onMusicPositionChange={handleMusicPositionChange}
          duration={track.duration_ms}
          isPaused={isPaused}
          position={position}
          setPosition={setPosition}
        />
      ) : (
        <ProgressBar
          onMusicPositionChange={handleMusicPositionChange}
          duration={0}
          isPaused={isPaused}
          position={position}
          setPosition={setPosition}
        />
      )}
    </StyledMainControls>
  );
};

export default MainControls;
