import styled from 'styled-components';

export const HeadWrapper = styled.div`
  display: flex;
  padding: 32px;
`;

export const ImageWrapper = styled.div`
  margin-right: 24px;
  height: 232px;
  width: 232px;

  & img {
    width: 100%;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;

  & h2 {
    font-size: .75em;
  }
  & h1 {
    font-size: 6em;
    font-weight: 900;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Artist = styled.div`
  display: flex;
  align-items: center;

  & p {
    font-size: .87em;
    font-weight: 700;
  }
`;

export const ArtistImg = styled.div`
  height: 24px;
  margin-right: 5px;
  
  & img {
    width: 24px;
    border-radius: 50%;
  }
`;

export const SpanArtistInfo = styled.span`
  font-size: .87em;
  color: rgba(255,255,255,.7);

  &::before {
    content: "•";
    margin: 0 4px;
  }
`;
