import React, { useEffect, useState} from 'react';
import Loading from 'components/Loading';
import GridItemsContainer from 'components/GridItemsContainer';
import SectionHeader from 'components/SectionHeader';
import { fetchStorage } from 'utils/fetchStorage';
import { getUserPlaylists } from 'services/spotifyApi/endpoints';

const LibPlaylists = ({ token }) => {
  const [playlists, setPlaylists] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchStorage('library-playlists', getUserPlaylists, token)
      .then(res => {
        setPlaylists(res.data)
        setIsLoading(false);
      })
  }, [token]);
  
  if (isLoading) return <Loading />;
  return (
    <>
      <SectionHeader>
        Playlists
      </SectionHeader>
      <GridItemsContainer itemsArray={playlists.items} />
    </>
  );
};

export default LibPlaylists;
