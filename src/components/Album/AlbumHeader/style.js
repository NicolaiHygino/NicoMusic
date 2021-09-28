import styled from 'styled-components';

export const HeadWrapper = styled.div`
  display: flex;
  padding: 32px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 24px;
  min-width: 232px;
  width: 232px;
  height: 232px;
  overflow: hidden;

  & img {
    height: 100%;
  }

  @media screen and (max-width: 900px) {
    height: 192px;
    width: 192px;
    min-width: 192px;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 30px;
    margin-right: 0;
  }
`;

export const ContentText = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: flex-end;

  & h2 {
    font-size: .75em;
  }
`;

export const Title = styled.h1`
  font-size: ${props => props.fontSize};
  font-weight: 900;

  @media screen and (max-width: 600px) {
    text-align: center;
    font-size: 1.5em;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Artist = styled.p`
  display: inline;
  font-size: .87em;
  font-weight: 700;

  @media screen and (max-width: 600px) {
    display: inline;
    text-align: center;
    font-size: .87em;
    color: var(--scd-track);
    font-weight: 400;
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

export const StyledSpan = styled.span`
  font-size: .87em;
  color: rgba(255,255,255,.7);

  &::before {
    content: "•";
    margin: 0 4px;
  }
`;
