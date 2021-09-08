import React, { useState, useEffect } from 'react';
import { getRecentPlayedContexts } from 'services/spotifyApi/endpoints';
import styled from 'styled-components';

const RecentlyContextsItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  row-gap: 16px;
  flex-wrap: wrap;
`;

const StyledContextItem = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, .1);
  height: 80px;
  border-radius: 5px;
  transition: background-color .3s ease;
  overflow: hidden;

  &:hover {
    background-color: rgba(255, 255, 255, .3);
  }
`;

const ImageWrapper = styled.div`
  box-shadow: 0 8px 24px rgba(0,0,0,.5);
  height: 80px;

  & img {
    max-width: 80px;
    max-height: 80px;
    border: 0;
  }
`;

const TitleWrapper = styled.div`
  padding: 1em;
  width: 100%;

  & p {
    margin: 0;
    font-size: 1em;
    font-weight: 700;
  }
`;

const TEMP_LINK = 'https://mosaic.scdn.co/300/ab67616d0000b2731390ceda3af1c4e742e2191eab67616d0000b273678614607d963702636ee75aab67616d0000b273a6c97e91aad5eecb10919b15ab67616d0000b273e70aac569b94abd971112f1b'

const ContextItem = ({ item }) => {  
  return (
    <StyledContextItem>
      <ImageWrapper>
        <img src={item.images[0].url}></img>
      </ImageWrapper>
      <TitleWrapper>
        <p>{item.name}</p>
      </TitleWrapper>
    </StyledContextItem>
  );
};

const RecentlyContextItems = ({ token }) => {
  const [
    recentlyPlayedContexts,
    setRecentlyPlayedContexts
  ] = useState([]);
  // console.log(recentlyPlayedContexts)
  useEffect(() => {
    getRecentPlayedContexts(token)
      .then(res => {
        setRecentlyPlayedContexts(res.slice(0, 6))
      })
  }, []);
  
  return (<>
    <h2>Bom Dia</h2>
    <RecentlyContextsItems>
      {recentlyPlayedContexts.map(item =>  
        <ContextItem key={item.id} item={item} />
      )}
    </RecentlyContextsItems>
  </>);
}

export default RecentlyContextItems;