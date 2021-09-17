import React, { useEffect, useState } from 'react';
import SectionItem from '../SectionItem';
import { getUserPlaylists } from 'services/spotifyApi/endpoints';
import {
  SectionWrapper,
  SectionHeaderWrapper,
  SectionHeader,
} from 'globalStyles';
import { ItemsContainer } from '../style';

const getRandomItems = (array, length) => {
  let randomArray = [];
  for (let i = 0; i < length; i++) {
    let randNum = Math.floor(Math.random() * array.length);
    randomArray.push(array[randNum])
  }
  return randomArray;
}

const UserPlaylistSection = ({ token }) => {
  const [playlists, setPlaylists] = useState([]);

  console.log(playlists)

  useEffect(() => {
    getUserPlaylists(token, 50)
      .then(res => {
        setPlaylists(getRandomItems(res.data.items, 5));
      })
  }, [token]);

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>
          Your favorite playlists
        </SectionHeader>
      </SectionHeaderWrapper>
      <ItemsContainer>
        { playlists.map(playlist => 
          <SectionItem key={playlist.id} item={playlist} />
        )}
      </ItemsContainer>
    </SectionWrapper>  
  );
};

export default UserPlaylistSection;
