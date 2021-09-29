import styled from 'styled-components';

export const StyledHiddenPlayer = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  background-color: #2d2a2a;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  bottom: 60px;
  height: 50px;
  width: calc(100vw - 20px);
`;

export const MusicInfo = styled.div`
  display: flex;
  flex: 1;
`;

export const ImageWrapper = styled.div`
  width: 32px;
  margin-right: 10px;

  & img {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  & p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
  }

  & span {
    color: #b3b3b3;
    line-height: 11px;
    font-size: 11px;
  }
`;

export const ControlWrapper = styled.div`
  display: flex;
  align-items: center;
  min-width: 48px;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: transparent;
  border: 0;
  width: 24px;
  height: 24px;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
