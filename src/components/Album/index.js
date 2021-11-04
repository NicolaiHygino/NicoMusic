import React, { useState, useEffect } from 'react';
import AlbumHeader from './AlbumHeader';
import AlbumTrackList from './AlbumTacksList';
import Loading from 'components/Loading';
import { useParams } from 'react-router-dom';
import { getAlbum, getArtist } from 'services/spotifyApi/endpoints';

const Album = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [album, setAlbum] = useState();
  const [artist, setArtist] = useState();
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchAlbum = async () => {
      const album = await getAlbum(id);
      const artistId = album.data.artists[0].id;

      const artist = await getArtist(artistId);
      
      setAlbum(album.data);
      setArtist(artist.data);
      setIsLoading(false);
    };
    fetchAlbum();
  }, [id]);

  if (isLoading) return <Loading />;
  return (
    <>
      <AlbumHeader album={album} artist={artist} />
      <AlbumTrackList
        tracks={album.tracks.items}
        contextUri={album.uri}
      />
    </>
  );
};

export default Album;
