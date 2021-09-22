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
  const [
    accessToken, 
    setAccessToken
  ] = useState(getFromStorage('accessToken'));
  
  const [
    refreshToken, 
    setRefreshToken
  ] = useState(getFromStorage('refreshToken'));
  
  const [
    expiresIn,
    setExpiresIn
  ] = useState(getFromStorage('expiresIn'));

  const refId = useRef(0);

  const saveAccessToken = token => {
    localStorage.setItem('accessToken', token);
    localStorage.setItem('fetchedAt', Date.now());
    setAccessToken(token);
  };

  const saveRefreshToken = token => {
    localStorage.setItem('refreshToken', token);
    setRefreshToken(token);
  };

  const saveExpiresIn = secs => {
    localStorage.setItem('expiresIn', secs);
    setExpiresIn(secs);
  };

  useEffect(() => {
    if(!refreshToken) return;
    const expiresInMs =  expiresIn * 1000;
    refId.current = setTimeout(
      () => {
        refreshSpotifyToken(refreshToken)
          .then(res => {
            saveAccessToken(res.data.accessToken);
            saveExpiresIn(res.data.expiresIn);
          })
      }, 
      expiresInMs
    );

    return () => {
      clearInterval(refId.current);
      refId.current = 0;
    }
  }, [refreshToken, expiresIn]);

  return [accessToken, saveAccessToken, saveRefreshToken, saveExpiresIn];
};

export default useSpotifyToken;
