import React, { useEffect, useState } from 'react';
import { getRecentlyPlayedContexts } from 'services/spotifyApi/endpoints';
import { Link } from 'react-router-dom';
import {
  SectionWrapper,
  SectionHeaderWrapper,
  SectionHeader,
} from 'globalStyles';
import {
  ItemsContainer,
  ItemWrapper,
  ImgWrapper,
  ContentWrapper,
  ItemTitle,
  ItemDesc,
} from './style';

const TrackItem = ({ item }) => {
  console.log(item.type);
  return (
    <ItemWrapper>
      <Link to={`${item.type}/${item.id}`}>
        <ImgWrapper>
          <img src={item.images[0].url} alt={item.name} />
        </ImgWrapper>
        <ContentWrapper>
          <ItemTitle>{item.name}</ItemTitle>
          <ItemDesc>{item?.description || item.artists[0].name}</ItemDesc>
        </ContentWrapper>
      </Link>
    </ItemWrapper>
  );
};

const UserPlaylistsSection = ({ token }) => {
  const [playedRecently, setPlayedRecently] = useState();

  useEffect(() => {
    getRecentlyPlayedContexts(token).then((res) => {
      setPlayedRecently(res.slice(0, 5));
    });
  }, [token]);

  if (!playedRecently) return null;
  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>Played recently </SectionHeader>
      </SectionHeaderWrapper>
      <ItemsContainer>
        {playedRecently.map((playlist) => (
          <TrackItem key={playlist.id} item={playlist} />
        ))}
      </ItemsContainer>
    </SectionWrapper>
  );
};

export default UserPlaylistsSection;
