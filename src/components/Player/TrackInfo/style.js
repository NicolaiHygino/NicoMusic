import styled from 'styled-components';

export const MusicInfo = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  height: 56px;
  width: 56px;

  & img {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  margin: 0 14px;

  & p {
    font-size: 14px;
  }

  & span {
    color: #b3b3b3;
    font-size: 11px;
  }
`;