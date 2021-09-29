import styled from 'styled-components';

export const MusicInfo = styled.div`
  display: flex;
  flex-flow: column;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  & img {
    width: 100%;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 20px;

  & p {
    font-size: 16px;
    font-weight: 600;
  }

  & span {
    color: #b3b3b3;
    font-size: 11px;
  }
`;