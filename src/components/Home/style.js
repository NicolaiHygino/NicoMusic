import styled from 'styled-components';

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 24px;

  @media screen and (max-width: 1100px) {
    grid-gap: 20px;
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-gap: 16px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-gap: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ItemWrapper = styled.div`
  background-color: #181818;
  width: 100%;
  border-radius: 5px;
  padding: 16px;
  transition: background-color .3s ease;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: hsla(0,0%,100%,0.07);  
  }
`;

export const ImgWrapper = styled.div`
  box-shadow: 0 8px 24px rgba(0, 0, 0, .5);
  width: 100%;
  margin-bottom: 16px;
  & img {
    display: block;
    border: 0;
    width: 100%;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 4px;
`;

export const ItemTitle = styled.h4`
  font-size: 1em;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ItemDesc = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: .87em;
  color: #b3b3b3;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-top: 4px;
  max-lines: 2;
`;
