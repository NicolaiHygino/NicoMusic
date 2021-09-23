import React from 'react';
import { GlobalStyle } from 'globalStyles';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import useSpotifyToken from './hooks/useSpotifyToken';
import { UriProvider } from 'context/UriContext';

function App() {
  const [accessToken, setAccessToken, setRefreshToken, setExpiresIn] = useSpotifyToken();

  const setLoginTokens = (accessToken, refreshToken, expiresIn) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    setExpiresIn(expiresIn);
  };

  if (!accessToken) {
    return (
      <>
        <GlobalStyle />
        <Login setLoginTokens={setLoginTokens} />
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <UriProvider token={accessToken}>
        <Dashboard token={accessToken} />
      </UriProvider>
    </>
  );
};

export default App;
