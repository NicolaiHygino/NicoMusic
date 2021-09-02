import { useState, useEffect } from 'react';
import { getSpotifyTokens } from 'services/spotifyApi/spotifyAuthentication';

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
  }, [code])

  if (error) return <p>Something went wrong</p>;
  return <h1>Dashboad</h1>
};

export default Dashboard;