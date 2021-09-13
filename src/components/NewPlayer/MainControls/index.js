import React from "react";
import ProgressBar from "./ProgressBar";
import ShuffeIcon from "assets/Icons/ShuffleIcon";
import PreviousIcon from "assets/Icons/PreviousIcon";
import PlayIcon from "assets/Icons/PlayIcon";
import PauseIcon from "assets/Icons/PauseIcon";
import NextIcon from "assets/Icons/NextIcon";
import RepeatIcon from "assets/Icons/RepeatIcon";
import { seekToPosition } from "services/spotifyApi/endpoints";
import {
  StyledMainControls,
  PlayPauseButton,
  PlayerButtons,
  IconButton,
} from "./style";

const MainControls = ({
  token,
  player,
  deviceId,
  track,
  isPaused,
  position,
  setPosition,
}) => {
  const handleMusicPositionChange = (newPosition) => {
    seekToPosition(token, newPosition, deviceId);
  };

  return (
    <StyledMainControls>
      <PlayerButtons>
        <IconButton>
          <ShuffeIcon />
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
