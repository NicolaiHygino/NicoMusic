import React, { useState, useEffect } from 'react';
import { getRecentPlayedContexts } from 'services/spotifyApi/endpoints';
import {
  RecentlyContextsItems,
  StyledContextItem,
  ImageWrapper,
  TitleWrapper
} from './style';

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