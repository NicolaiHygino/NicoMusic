import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getPlaylist } from 'services/spotifyApi/endpoints';
import PlaylistHeader from './PlaylistHeader';
import PlaylistTrackList from './PlaylistTrackList';

const Playlist = ({ token }) => {
  const [playlist, setPlaylist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPlaylist(token, id).then(res => setPlaylist(res.data))
  }, [token, id]);

  console.log(playlist);

  if (!playlist) {
    return <p>Loading</p>
  }

  // return <h1>PLAYLIST</h1>;
  return (<>
    <PlaylistHeader playlist={playlist} />
    <PlaylistTrackList trackItems={playlist.tracks.items} />
  </>);
};

export default Playlist;