import React, { useEffect, useState } from 'react';
import SectionItem from '../SectionItem';
import { getUserPlaylists } from 'services/spotifyApi/endpoints';
import {
  SectionWrapper,
  SectionHeaderWrapper,
  SectionHeader,
} from 'globalStyles';
import { ItemsContainer } from '../style';
import { fetchStorage } from 'utils/fetchStorage';
import { sortRandomItems } from 'utils/sortRandomItems';

const UserPlaylistSection = ({ token }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetchStorage(token, getUserPlaylists, 'user-playlists-home')
      .then(res => setPlaylists(sortRandomItems(res.data.items, 5)));
  }, [token]);

  if (!playlists) return null;
  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>Your favorite playlists</SectionHeader>
      </SectionHeaderWrapper>
      <ItemsContainer>
        {playlists.map((playlist) => (
          <SectionItem key={playlist.id} item={playlist} />
        ))}
      </ItemsContainer>
    </SectionWrapper>
  );
};

export default UserPlaylistSection;
