import React, { useState, useEffect } from 'react';
import AlbumHeader from './AlbumHeader';
import AlbumTrackList from './AlbumTacksList';
import Loading from 'components/Loading';
import { useParams } from 'react-router-dom';
import { getAlbum } from 'services/spotifyApi/endpoints';

const Album = ({ token }) => {
  const [album, setAlbum] = useState();
  const { id } = useParams();

  useEffect(() => {
    getAlbum(token, id).then((res) => setAlbum(res.data));
  }, [token, id]);

  if (!album) return <Loading />;
  return (
    <>
      <AlbumHeader album={album} />
      <AlbumTrackList tracks={album.tracks.items} uri={album.uri} />
    </>
  );
};

export default Album;
