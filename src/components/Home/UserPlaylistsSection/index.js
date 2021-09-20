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

const getRandomItems = (array, length) => {
  let randItems = [];
  while (randItems.length < length) {
    let randNum = Math.floor(Math.random() * array.length);
    if (randItems.every((item) => item.name !== array[randNum].name)) {
      randItems.push(array[randNum]);
    }
  }
  return randItems;
};

const UserPlaylistSection = ({ token }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetchStorage(token, getUserPlaylists, 'user-playlists-home')
      .then(res => setPlaylists(getRandomItems(res.data.items, 5)));
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
