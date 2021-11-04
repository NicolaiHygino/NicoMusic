import React, { useState, useEffect } from 'react';
import SectionHeader from 'components/SectionHeader';
import { getRecentlyPlayedContexts } from 'services/spotifyApi/endpoints';
import { Link } from 'react-router-dom';
import { fetchStorage } from 'utils/fetchStorage';
import {
  RecentlyContextsItems,
  StyledContextItem,
  ImageWrapper,
  TitleWrapper,
} from './style';
import { SectionWrapper } from 'globalStyles';

const ContextItem = ({ item }) => {
  const imgUrl = item.images[1]?.url || item.images[0]?.url;
  return (
    <Link to={`${item.type}/${item.id}`}>
      <StyledContextItem>
        <ImageWrapper>
          <img src={imgUrl} alt={item.name} />
        </ImageWrapper>
        <TitleWrapper>
          <p>{item.name}</p>
        </TitleWrapper>
      </StyledContextItem>
    </Link>
  );
};

const RecentlyContextItems = () => {
  const [
    recentlyPlayedContexts, 
    setRecentlyPlayedContexts
  ] = useState();
  
  useEffect(() => {
    fetchStorage(
      'recently-played-contexts',
      getRecentlyPlayedContexts, 
    ).then(data => 
      setRecentlyPlayedContexts(data.slice(0, 6))
    );
  }, []);

  if (!recentlyPlayedContexts) return null;
  return (
    <SectionWrapper>
      <SectionHeader large>
        Good Morging
      </SectionHeader>
      <RecentlyContextsItems>
        {recentlyPlayedContexts.map((item) => (
          <ContextItem key={item.id} item={item} />
        ))}
      </RecentlyContextsItems>
    </SectionWrapper>
  );
};

export default RecentlyContextItems;
