import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getAlbum } from 'services/spotifyApi/endpoints';
import AlbumHeader from './AlbumHeader';
import AlbumTrackList from './AlbumTacksList';

const Album = ({ token }) => {
  const [album, setAlbum] = useState();
  const {id} = useParams();

  useEffect(() => {
    getAlbum(token, id)
      .then(res => setAlbum(res.data))
  }, [token, id]);

  if (!album) {
    return <p>Loading</p>
  }

  return (<>
    <AlbumHeader album={album} />
    <AlbumTrackList tracks={album.tracks.items} />
  </>);
};

export default Album;