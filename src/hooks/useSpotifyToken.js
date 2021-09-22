import { useState, useEffect, useRef } from 'react';
import { refreshSpotifyToken } from 'services/spotifyApi/authentication';

const useSpotifyToken = () => {
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

  const idRef = useRef(0);

  useEffect(() => {
    if(!refreshToken) return;
    const expiresInMs =  expiresIn * 999;
    idRef.current = setInterval(() =>
      refreshSpotifyToken(refreshToken)
        .then(res => {
          setAccessToken(res.data.accessToken);
          setExpiresIn(res.data.expiresIn);
        }), 
      expiresInMs
    );

    return () => {
      clearInterval(idRef.current);
      idRef.current = 0;
    }
  }, [refreshToken, expiresIn]);

  return [accessToken, setAccessToken, setRefreshToken, setExpiresIn];
};

export default useSpotifyToken;
