import React, { useState, useEffect } from 'react';
import Loading from 'components/Loading';
import GridItemsContainer from 'components/GridItemsContainer';
import { fetchStorage } from 'utils/fetchStorage';
import { getUserAlbums } from 'services/spotifyApi/endpoints';
import SectionHeader from 'components/SectionHeader';

const LibAlbum = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    fetchStorage('library-albums', getUserAlbums)
      .then(res => {
        const items = res.data.items.map(item => item.album);
        setAlbums(items);
        setIsLoading(false);
      })
  }, []);

  if (isLoading) return <Loading />;
  return (
    <>
      <SectionHeader>
        Albums
      </SectionHeader>
      <GridItemsContainer itemsArray={albums} />
    </>
  );
};

export default LibAlbum;
