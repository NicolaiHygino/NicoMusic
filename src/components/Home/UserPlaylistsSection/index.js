import React, { useEffect, useState } from 'react';
import SectionHeader from '../SectionHeader';
import HomeItemsContainer from '../HomeItemsContainer';
import { getUserPlaylists } from 'services/spotifyApi/endpoints';
import { fetchStorage } from 'utils/fetchStorage';
import { sortRandomItems } from 'utils/sortRandomItems';
import { SectionWrapper } from 'globalStyles';

const UserPlaylistSection = ({ token }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetchStorage('user-playlists-home', getUserPlaylists, token)
      .then(res => setPlaylists(
        sortRandomItems(res.data.items, 5))
      );
  }, [token]);

  if (!playlists) return null;
  return (
    <SectionWrapper>
      <SectionHeader>
        Your favorite playlists
      </SectionHeader>
      <HomeItemsContainer itemsArray={playlists} />
    </SectionWrapper>
  );
};

export default UserPlaylistSection;
