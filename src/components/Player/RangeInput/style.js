import styled from 'styled-components';

export const RangeWrapper = styled.div`
  height: -1px;
  padding-top: 3px;
  width: 100%;

  @media screen and (min-width: 900px) {
    /* Chrome */
    &:hover input[type="range"]::-webkit-slider-thumb {
      border: none;
      height: 12px;
      width: 12px;
      border-radius: 12px;
      background: white;
      cursor: pointer;
    }
    &:hover input[type="range"]::-webkit-slider-runnable-track {
      background-image: linear-gradient(
        90deg,
        var(--main-red) var(--progressPercent),
        var(--track-bg) var(--progressPercent)
      );
    }

    /* Firefox */
    &:hover input[type="range"]::-moz-range-thumb {
      border: none;
      height: 12px;
      width: 12px;
      border-radius: 12px;
      background: white;
      cursor: pointer;
    }
    &:hover input[type="range"]::-moz-range-progress {
      background-color: var(--main-red);
    }

    /* IE */
    &:hover input[type="range"]::-ms-thumb {
      border: none;
      height: 12px;
      width: 12px;
      border-radius: 12px;
      background: white;
      cursor: pointer;
    }
    &:hover input[type="range"]::-ms-fill-lower {
      background: var(--main-red);
    }
  }
`;

export const StyledRangeInput = styled.input`
  --progressPercent: 0%;
  --height: 4px;
  --lower-bg: #b3b3b3;
  --track-bg: #535353;

  width: 100%;
  background-color: transparent;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  /* || Chrome Styles */
  &::-webkit-slider-runnable-track {
    background: var(--track-bg);
    border: 0;
    border-radius: var(--height);
    width: 100%;
    height: var(--height);
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    margin-top: -4px;
    width: 0px;
    height: 0px;
    border: 0;
    -webkit-appearance: none;
  }

  @media screen and (max-width: 900px) {
    &::-webkit-slider-thumb {
      border: none;
      height: 12px;
      width: 12px;
      border-radius: 12px;
      background: white;
      cursor: pointer;
    }
  }

  /* Chrome Progress trick */
  &::-webkit-slider-runnable-track {
    background-image: linear-gradient(
      90deg,
      var(--main-red) var(--progressPercent),
      var(--track-bg) var(--progressPercent)
    );
    border-radius: var(--height);
  }
  /* || End Chrome Styles */

  /* || Mozilla Styles */
  &::-moz-range-track {
    background: var(--track-bg);
    border: 0;
    border-radius: var(--height);
    width: 100%;
    height: var(--height);
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 0px;
    height: 0px;
    border: 0;
  }

  @media screen and (max-width: 900px) {
    &::-moz-range-thumb {
      border: none;
      height: 12px;
      width: 12px;
      border-radius: 12px;
      background: white;
      cursor: pointer;
    }
  }

  &::-moz-range-progress {
    background-color: var(--main-red);
    border-radius: var(--height);
    height: var(--height);
  }
  /* || End Mozilla Styles */

  /* || IE Styles */
  &::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 0 0;
    color: transparent;
    width: 100%;
    height: 4px;
    cursor: pointer;
  }

  &::-ms-fill-lower {
    background: var(--main-red);
    border: 0;
    border-radius: 8px;
  }

  &::-ms-fill-upper {
    background: var(--track-bg);
    border: 0;
    border-radius: 8px;
  }

  &::-ms-thumb {
    width: 0;
    height: 0;
    border: 0;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }

  @media screen and (max-width: 900px) {
    &::-ms-thumb {
      border: none;
      height: 12px;
      width: 12px;
      border-radius: 12px;
      background: white;
      cursor: pointer;
    }
  }

  &:focus::-ms-fill-lower {
    background: var(--main-red);
  }
  /* || End IE Styles */
`;
