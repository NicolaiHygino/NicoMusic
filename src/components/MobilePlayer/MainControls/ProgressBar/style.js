import styled from 'styled-components';

export const StyledProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 16px;
  margin-bottom: 10px;
`;

export const Duration = styled.div`
  min-width: 40px;
  text-align: center;
  font-size: 11px;
  color: #b3b3b3;
`;

export const BarWrapper = styled.div`
  height: 4px;
  width: 100%;

  /* Chrome */
  &:hover input[type="range"]::-webkit-slider-thumb {
    border: none;
    height: 12px;
    width: 12px;
    border-radius: 12px;
    background: white;
    cursor: pointer;
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

  /* IE */
  &:hover input[type="range"]::-ms-thumb {
    border: none;
    height: 12px;
    width: 12px;
    border-radius: 12px;
    background: white;
    cursor: pointer;
  }
`;

export const BarBackground = styled.div`
  height: 4px;
  width: 100%;
  background-color: #535353;
  border-radius: 4px;
  `;

export const BarInputRange = styled.input`
  width: 100%;
  margin: -1.5px 0;
  background-color: transparent;
  -webkit-appearance: none;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    background: #535353;
    border: 0;
    border-radius: 4px;
    width: 100%;
    height: 4px;
    cursor: pointer;
  }

  &::-webkit-slider-thumb {
    margin-top: -4px;
    width: 0px;
    height: 1px;
    background: #ffffff;
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    -webkit-appearance: none;
  }

  &:focus::-webkit-slider-runnable-track {
    background: #606060;
  }

  &::-moz-range-track {
    background: #535353;
    border: 0;
    border-radius: 4px;
    width: 100%;
    height: 4px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    width: 0px;
    height: 1px;
    background: #ffffff;
    border: 0;
    border-radius: 12px;
    cursor: pointer;
  }

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
    background: #464646;
    border: 0;
    border-radius: 8px;
  }

  &::-ms-fill-upper {
    background: #535353;
    border: 0;
    border-radius: 8px;
  }

  &::-ms-thumb {
    width: 0px;
    height: 1px;
    background: #ffffff;
    border: 0;
    border-radius: 12px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }

  &:focus::-ms-fill-lower {
    background: #535353;
  }

  &:focus::-ms-fill-upper {
    background: #606060;
  }
  
  /*TODO: Use one of the selectors from https://stackoverflow.com/a/20541859/7077589 and figure out
  how to remove the virtical space around the range input in IE*/
  @supports (-ms-ime-align:auto) {
    /* Pre-Chromium Edge only styles, selector taken from hhttps://stackoverflow.com/a/32202953/7077589 */
    & {
      margin: 0;
      /*Edge starts the margin from the thumb, not the track as other browsers do*/
    }
  }

`;
