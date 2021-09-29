import styled from 'styled-components';

export const StyledPlayer = styled.footer`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  z-index: 1;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #181818;
  border-top: 1px solid #282828;

  &.hidePlayer {
    display: none;
  }
`;

export const LoadingPlayer = styled(StyledPlayer)`
  justify-content: center;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: transparent;
  border: 0;
  width: 40px;
  height: 40px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 60px;

  & svg {
    transform: rotate(90deg);
  }
`;

export const TopBarIcon = styled(IconButton)`
  width: 24px;
  height: 24px;
`;
