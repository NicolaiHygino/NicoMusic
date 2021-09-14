import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { StyledRangeInput, RangeWrapper } from "./style";

const RangeInput = (props) => {
  const inputRef = useRef();

  const getPercent = useMemo(
    () => (value) => ((value - props.min) / (props.max - props.min)) * 100,
    [props.max, props.min]
  );

  const changeInputProgressPercentStyle = useCallback(() => {
    inputRef.current.style.setProperty(
      "--progressPercent",
      `${getPercent(inputRef.current.value)}%`
    );
  }, [getPercent]);

  useEffect(() => {
    if (!inputRef?.current) return;
    changeInputProgressPercentStyle();
  }, [props.value, changeInputProgressPercentStyle]);

  return (
    <RangeWrapper>
      <StyledRangeInput ref={inputRef} type="range" {...props} />
    </RangeWrapper>
  );
};

export default RangeInput;
