import styled from 'styled-components';

export const StyledMainControls = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const PlayerButtons = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin-bottom: 12px;
`;

export const IconButton = styled.button`
  color: #fff;
  background-color: rgba(0,0,0,0);
  border: 0;
  width: 32px;
  height: 32px;
  line-height: 0;
  margin: 0 4px;
  cursor: pointer;
`;

export const PlayPauseButton = styled(IconButton)`
  background-color: #fff;
  border-radius: 50%;
  color: #000;
`;

export const VolumeWrapper = styled.div`
  flex: 1;
`;
