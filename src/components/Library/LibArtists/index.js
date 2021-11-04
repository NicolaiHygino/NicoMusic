import React, { useState, useEffect } from 'react';
import Loading from 'components/Loading';
import GridItemsContainer from 'components/GridItemsContainer';
import { fetchStorage } from 'utils/fetchStorage';
import { getUserArtistis } from 'services/spotifyApi/endpoints';
import SectionHeader from 'components/SectionHeader';

const LibArtists = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchStorage('library-artists', getUserArtistis).then(res => {
      setArtists(res.data.artists)
      setIsLoading(false);
    })
  }, []);
  
  if (isLoading) return <Loading />;
  return (
    <>
      <SectionHeader>
        Artists
      </SectionHeader>
      <GridItemsContainer itemsArray={artists.items} />
    </>
  );
};

export default LibArtists;
