import { useState } from 'react';

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

export const useSpotifyToken = () => {
  const [token, setToken] = useState(getFromStorage('accessToken'));

  const saveToken = token => {
    localStorage.setItem('token', token);
    localStorage.setItem('fetchedAt', Date.now());
    setToken(token);
  };

  return {
    token,
    saveToken,
  };
};
