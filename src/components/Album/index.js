import React, { useState, useEffect } from 'react';
import AlbumHeader from './AlbumHeader';
import AlbumTrackList from './AlbumTacksList';
import Loading from 'components/Loading';
import { useParams } from 'react-router-dom';
import { getAlbum } from 'services/spotifyApi/endpoints';

const Album = ({ token }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [album, setAlbum] = useState();
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getAlbum(token, id)
      .then((res) => {
        setAlbum(res.data)
        setIsLoading(false);
      });
  }, [token, id]);

  if (isLoading) return <Loading />;
  return (
    <>
      <AlbumHeader album={album} />
      <AlbumTrackList 
        token={token}
        tracks={album.tracks.items}
        contextUri={album.uri}
      />
    </>
  );
};

export default Album;
