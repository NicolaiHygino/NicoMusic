import React, { useState, useEffect } from 'react';
import SectionItem from '../SectionItem';
import { getRecentlyTracks, getRecommendations } from 'services/spotifyApi/endpoints';
import { fetchStorage } from 'utils/fetchStorage';
import { sortRandomItems } from 'utils/sortRandomItems';
import { SectionWrapper, SectionHeaderWrapper, SectionHeader } from 'globalStyles';
import { ItemsContainer } from '../style';

const Recommendations = ({ token }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchStorage(
        'recently-played-tracks',
        getRecentlyTracks,
        token
      );
      const items = res.data.items.map(item => item.track);
      
      const seedTracks = sortRandomItems(items, 5)
        .map(item => item.id)
        .join(',');

      const recoRes = await fetchStorage(
        'get-recommendations',
        getRecommendations,
        token,
        20, 
        seedTracks
      );
      const recommendedAlbuns = recoRes.data.tracks
        .map(item => item.album);  
      setRecommendations(recommendedAlbuns.slice(0, 5));
    };
    fetchData();
  }, [token])

  return (
    <SectionWrapper>
      <SectionHeaderWrapper>
        <SectionHeader>Albums based on what you were listening to </SectionHeader>
      </SectionHeaderWrapper>
      <ItemsContainer>
        {recommendations.map(album => 
          <SectionItem key={`secIt${album.id}`} item={album} />
        )}
      </ItemsContainer>
    </SectionWrapper>
  );
};

export default Recommendations;
