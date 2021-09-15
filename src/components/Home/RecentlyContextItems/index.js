import React, { useState, useEffect } from 'react';
import { getRecentPlayedContexts } from 'services/spotifyApi/endpoints';
import { Link } from 'react-router-dom';
import {
  RecentlyContextsItems,
  StyledContextItem,
  ImageWrapper,
  TitleWrapper,
} from './style';

const ContextItem = ({ item }) => {  
  const url = item.type;
  const id = item.uri.split(':')[2];

  return (
    <Link to={`${url}/${id}`}>
      <StyledContextItem>
        <ImageWrapper>
          <img src={item.images[0].url} alt={item.name}/>
        </ImageWrapper>
        <TitleWrapper>
          <p>{item.name}</p>
        </TitleWrapper>
      </StyledContextItem>
    </Link>
  );
};

const RecentlyContextItems = ({ token }) => {
  const [
    recentlyPlayedContexts,
    setRecentlyPlayedContexts
  ] = useState([]);
  
  useEffect(() => {
    getRecentPlayedContexts(token)
      .then(res => {
        setRecentlyPlayedContexts(res.slice(0, 6))
      })
  }, [token]);
  
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