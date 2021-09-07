import { useState } from 'react';

const useToken = () => {
  const getToken = () => {
    const fetchedAt = localStorage.getItem('fetchedAt');
    const timeNow = Date.now();  
    const diffTime = timeNow - fetchedAt;
    const oneHoursInMs = 1 * 60 * 60 * 1000;
  
    if (diffTime < oneHoursInMs) {
      return localStorage.getItem('accessToken');
    }
    return null;
  }
  
  const [token, setToken] = useState(getToken());

  const saveToken = newToken => {
    localStorage.setItem('accessToken', newToken);
    localStorage.setItem('fetchedAt', Date.now());
    setToken(newToken);
  }

  return [token, saveToken];
};

export default useToken;