import { useState, useEffect } from 'react';
import { getSpotifyTokens } from 'services/spotifyApi/spotifyAuthentication';
import { CenterWrapper } from 'globalStyles';
import Search from 'components/Search';
import Player from 'components/Player';

const Dashboard = ({ code }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(false);
  const [trackUri, setTrackUri] = useState([]);

  const handleTrackUriChange = newUri =>
    setTrackUri(newUri);

  useEffect(() => {
    getSpotifyTokens(code)
      .then(res => {
        setAccessToken(res.data.accessToken);
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        window.history.pushState({}, '', '/');
      })
  }, [code]);

  if (error) return (
    <CenterWrapper>
      <p>Something went wrong :(</p>
    </CenterWrapper>
  );
  if (!accessToken) return (
    <CenterWrapper>
      <p>Loading...</p>
    </CenterWrapper>
  );
  return (
    <>
    <Search 
      accessToken={accessToken} 
      onClick={handleTrackUriChange}
    />
    <Player accessToken={accessToken} uris={trackUri}/>
    </>
  );
};

export default Dashboard;