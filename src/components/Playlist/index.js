import React, { useState, useEffect } from 'react';
import Loading from 'components/Loading';
import PlaylistHeader from './PlaylistHeader';
import PlaylistTrackList from './PlaylistTrackList';
import { useParams } from 'react-router-dom';
import { getPlaylist } from 'services/spotifyApi/endpoints';

const Playlist = ({ token }) => {
  const [playlist, setPlaylist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getPlaylist(token, id).then(res => setPlaylist(res.data))
  }, [token, id]);

  if (!playlist) return <Loading />;

  return (<>
    <PlaylistHeader playlist={playlist} />
    <PlaylistTrackList trackItems={playlist.tracks.items} uri={playlist.uri}/>
  </>);
};

export default Playlist;