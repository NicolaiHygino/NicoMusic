import React, { useState, useEffect } from 'react';
import { getRecentlyPlayedContexts } from 'services/spotifyApi/endpoints';
import { Link } from 'react-router-dom';
import {
  RecentlyContextsItems,
  StyledContextItem,
  ImageWrapper,
  TitleWrapper,
} from './style';
import {
  SectionHeaderWrapper,
  SectionHeader,
  SectionWrapper,
} from 'globalStyles';
import styled from 'styled-components';

const LargeSectionHeader = styled(SectionHeader)`
  font-size: 32px;
`;

const ContextItem = ({ item }) => {
  const url = item.type;
  const id = item.uri.split(':')[2];

  return (
    <Link to={`${url}/${id}`}>
      <StyledContextItem>
        <ImageWrapper>
          <img src={item.images[0].url} alt={item.name} />
        </ImageWrapper>
        <TitleWrapper>
          <p>{item.name}</p>
        </TitleWrapper>
      </StyledContextItem>
    </Link>
  );
};

const RecentlyContextItems = ({ token }) => {
  const [recentlyPlayedContexts, setRecentlyPlayedContexts] = useState([]);

  useEffect(() => {
    getRecentlyPlayedContexts(token).then((res) => {
      setRecentlyPlayedContexts(res.slice(0, 6));
    });
  }, [token]);

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <LargeSectionHeader>Bom Dia</LargeSectionHeader>
      </SectionHeaderWrapper>
      <RecentlyContextsItems>
        {recentlyPlayedContexts.map((item) => (
          <ContextItem key={item.id} item={item} />
        ))}
      </RecentlyContextsItems>
    </SectionWrapper>
  );
};

export default RecentlyContextItems;
