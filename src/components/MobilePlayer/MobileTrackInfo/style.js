import styled from 'styled-components';

export const MusicInfo = styled.div`
  display: flex;
  width: 80vw;
  align-items: center;
`;

export const TitleWrapper = styled.div`
  margin: 0 5px;
  overflow: hidden;

  & p {
    font-size: 14px;
    white-space: nowrap;
  }

  & span {
    color: #b3b3b3;
    font-size: 11px;
  }
`;