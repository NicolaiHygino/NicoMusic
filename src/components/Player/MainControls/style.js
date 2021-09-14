import styled from 'styled-components';
import { IconButton } from '../style';

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

export const PlayPauseButton = styled(IconButton)`
  background-color: #fff;
  border-radius: 50%;
  color: #000;
`;

export const VolumeWrapper = styled.div`
  flex: 1;
`;
