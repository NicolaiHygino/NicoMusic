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
  duration,
  position,
  setPosition,
  isPaused,
  onPositionChange,
}) => {
  const [pauseInterval, setPauseInterval] = useState(false);

  useInterval(
    () => {
      if (position < 0) return;
      setPosition(position + 1000);
    },
    isPaused === pauseInterval ? 1000 : null
  );

  const handleEventEnd = () => {
    setPauseInterval(false);
    onPositionChange(position);
  };

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
