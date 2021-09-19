import React, { useState, useEffect, useMemo, createContext } from 'react';
import { playResume } from 'services/spotifyApi/endpoints';

export const UriContext = createContext({
  trackUri: '',
  setTrackUri: () => {},
});

export const UriProvider = ({ children, token }) => {
  const [contextUri, setContextUri] = useState(null);
  const [offset, setOffset] = useState(null);
  const value = useMemo(
    () => ({ contextUri, setContextUri, offset, setOffset }),
    [contextUri, offset]
  );

  useEffect(() => {
    if (!contextUri) return;
    playResume(token, contextUri, offset);
  }, [contextUri, offset, token]);

  return <UriContext.Provider value={value}>{children}</UriContext.Provider>;
};
