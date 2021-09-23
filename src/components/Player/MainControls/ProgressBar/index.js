import React, { useState, useEffect, useRef } from 'react';
import { StyledProgressBar, Duration } from './style';
import { msToMinsAndSecs } from 'utils/msConverter';
import RangeInput from 'components/Player/RangeInput';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = () => savedCallback.current();
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

const ProgressBar = ({
  player,
  isPaused,
}) => {
  const [pauseInterval, setPauseInterval] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useInterval(
    () => {
      if (position < 0) return;
      setPosition(position + 1000);
    },
    isPaused === pauseInterval ? 1000 : null
  );
  
  const handleEventEnd = () => {
    setPauseInterval(false);
    player.seek(position);
  };

  useEffect(() => {
    player.addListener('player_state_changed', state => {
      const position = state?.position || 0;
      const duration = state?.duration || 0;
      setDuration(duration);
      setPosition(position);
    });
    return () => player.removeListener('player_state_changed');
  }, [player]);

  return (
    <StyledProgressBar>
      <Duration>{msToMinsAndSecs(position)}</Duration>
      <RangeInput
        type="range"
        min="0"
        max={duration}
        value={position}
        step={1000}
        onChange={(e) => setPosition(parseInt(e.target.value))}
        onMouseDown={() => setPauseInterval(true)}
        onMouseUp={() => handleEventEnd()}
        onTouchEnd={() => handleEventEnd()}
      />
      <Duration>{msToMinsAndSecs(duration)}</Duration>
    </StyledProgressBar>
  );
};

export default ProgressBar;
