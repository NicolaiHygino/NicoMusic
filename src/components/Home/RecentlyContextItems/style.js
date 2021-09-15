import styled from 'styled-components';

export const RecentlyContextsItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  row-gap: 16px;
  flex-wrap: wrap;

  @media screen and (max-width: 860px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 550px) {
    gap: 10px;
  }
`;

export const StyledContextItem = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, .1);
  border-radius: 5px;
  transition: background-color .3s ease;
  overflow: hidden;

  &:hover {
    background-color: rgba(255, 255, 255, .3);
  }

  @media screen and (max-width: 550px) {
    height: 50px;
  }
`;

export const ImageWrapper = styled.div`
  box-shadow: 0 8px 24px rgba(0,0,0,.5);
  height: 80px;
  width: 80px;
  min-width: 80px;
 
  & img {
    width: 100%;
  }

  @media screen and (max-width: 550px) {
    height: 50px;
    width: 50px;
    min-width: 50px;
  }
`;

export const TitleWrapper = styled.div`
  padding: 1em;
  width: 100%;

  & p {
    margin: 0;
    font-size: 1em;
    font-weight: 700;
  }

  @media screen and (max-width: 550px) {
    font-size: .8em;
  }
`;
