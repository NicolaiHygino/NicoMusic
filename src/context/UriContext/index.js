import React, { useState, useEffect, useMemo, createContext } from 'react';
import { playResume } from 'services/spotifyApi/endpoints';

export const UriContext = createContext({
  trackUri: '',
  setTrackUri: () => {},
});

export const UriProvider = ({ children, token }) => {
  const [trackUri, setTrackUri] = useState(null);
  const value = useMemo(
    () => ({trackUri, setTrackUri}),
    [trackUri]
  );
  
  useEffect(() => {
    if (!trackUri) return
    playResume(token, trackUri)
  }, [trackUri, token])

  return (
    <UriContext.Provider value={value} >
      { children }
    </UriContext.Provider>
  );
};
