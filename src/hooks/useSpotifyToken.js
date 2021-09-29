import { useState, useEffect, useRef } from 'react';
import { refreshSpotifyToken } from 'services/spotifyApi/authentication';

const getFromStorage = (key) => {
  const fetchedAt = localStorage.getItem('fetchedAt');
  const timeNow = Date.now();  
  const diffTime = timeNow - fetchedAt;
  const oneHoursInMs = 1 * 60 * 60 * 1000;

  if (diffTime < oneHoursInMs) {
    return localStorage.getItem(key);
  }
  return null;
};

const useSpotifyToken = () => {
  const [accessToken, setAccessToken] = useState(getFromStorage('accessToken'));
  const [refreshToken, setRefreshToken] = useState(null);
  const [expiresIn, setExpiresIn] = useState(null);

  const idRef = useRef(0);

  const saveAccessToken = token => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('fetchedAt', Date.now());
    setAccessToken(token);
  };

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

  return [accessToken, saveAccessToken, setRefreshToken, setExpiresIn];
};

export default useSpotifyToken;
