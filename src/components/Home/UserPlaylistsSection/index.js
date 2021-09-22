import React, { useEffect, useState } from 'react';
import SectionHeader from 'components/SectionHeader';
import GridItemsContainer from 'components/GridItemsContainer';
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
      <GridItemsContainer itemsArray={playlists} />
    </SectionWrapper>
  );
};

export default UserPlaylistSection;
