import React, { useState, useEffect } from 'react';
import SectionHeader from 'components/SectionHeader';
import GridItemsContainer from 'components/GridItemsContainer';
import { getRecentlyTracks, getRecommendations } from 'services/spotifyApi/endpoints';
import { fetchStorage } from 'utils/fetchStorage';
import { sortRandomItems } from 'utils/sortRandomItems';
import { SectionWrapper } from 'globalStyles';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchStorage(
        'recently-played-tracks',
        getRecentlyTracks,
      );
      const items = res.data.items.map(item => item.track);
      
      const seedTracks = sortRandomItems(items, 5)
        .map(item => item.id)
        .join(',');

      const recoRes = await fetchStorage(
        'get-recommendations',
        getRecommendations,
        50, 
        seedTracks
      );
      const recommendedAlbuns = recoRes.data.tracks
        .map(item => item.album);  
      setRecommendations(sortRandomItems(recommendedAlbuns, 5));
    };
    fetchData();
  }, [])

  return (
    <SectionWrapper>
      <SectionHeader>
        Albums based on what you were listening to 
      </SectionHeader>
      <GridItemsContainer slider itemsArray={recommendations} />
    </SectionWrapper>
  );
};

export default Recommendations;
