import React, { useState, useEffect } from 'react';
import Loading from 'components/Loading';
import { useParams } from 'react-router-dom';
import { getArtist, getArtistTopTracks } from 'services/spotifyApi/endpoints';
import { numberWithDot } from 'utils/numberWithDot';
import {
  Banner,
  ArtistName,
  Followers,
} from './style';
import { SectionWrapper } from 'globalStyles';

const Artist = ({ token }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [artist, setArtist] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    
    getArtist(token, id).then(res => {
      setArtist(res.data);
      setIsLoading(false);
      console.log(res.data);
    });

    getArtistTopTracks(token, id).then(res => {
      console.log(res.data);
    });

  }, [id, token]);

  if (isLoading) return <Loading />;
  return (
    <>
      <Banner>
        <SectionWrapper>
          <ArtistName>
            {artist.name}
          </ArtistName>
          <Followers>
            {numberWithDot(artist.followers.total)} followers
          </Followers>
        </SectionWrapper>
      </Banner>
      <SectionWrapper>
        <h2>Popular</h2>
      </SectionWrapper>
    </>
  );
};

export default Artist;