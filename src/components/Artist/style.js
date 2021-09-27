import styled from 'styled-components';

export const Banner = styled.div`
  display: flex;
  align-items: flex-end;
  height: 40vh;
  margin-top: -60px;
  min-height: 340px;
  background-image: url(${props => props.background});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Verified = styled.span`

`;

export const ArtistName = styled.h1`
  font-size: 6em;
  font-weight: 900;
`;

export const Followers = styled.p`
  font-size: 1em;
  margin-top: 4px;
`;