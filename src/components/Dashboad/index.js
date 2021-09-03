import { useState, useEffect } from 'react';
import { getSpotifyTokens } from 'services/spotifyApi/spotifyAuthentication';
import Search from 'components/Search';

const Dashboard = ({ code }) => {
  const [accessToken, setAccessToken] = useState(null);
  const [error, setError] = useState(false);
  
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

  if (error) return <p>Something went wrong</p>;
  if (!accessToken) return <p>Loading...</p>
  return (
    <Search accessToken={accessToken} />
  );
};

export default Dashboard;