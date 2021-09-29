import styled from 'styled-components';
import { IconButton } from '../style';

export const StyledMainControls = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PlayerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const PlayPauseButton = styled(IconButton)`
  background-color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #000;
`;
