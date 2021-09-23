import React, { useState, useEffect } from 'react';
import Loading from 'components/Loading';
import PlaylistHeader from './PlaylistHeader';
import PlaylistTrackList from './PlaylistTrackList';
import { useParams } from 'react-router-dom';
import { getPlaylist, playResume } from 'services/spotifyApi/endpoints';

const Playlist = ({ token }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [playlist, setPlaylist] = useState(null);
  const [tracks, setTracks] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getPlaylist(token, id).then(res => {
      const tracks = res.data.tracks.items
        .filter(item => item.track !== null);

      tracks.forEach((item, i) => {
        item.track.nicomusic_index = i 
      });

      setTracks(tracks);
      setPlaylist(res.data);
      setIsLoading(false);
    });
  }, [token, id]);

  if (isLoading) {
    return <Loading />;
  }
  return (<>
    <PlaylistHeader playlist={playlist} tracks={tracks} />
    <PlaylistTrackList 
      token={token} 
      trackItems={tracks} 
      contextUri={playlist.uri}  
    />
  </>);
};

export default Playlist;