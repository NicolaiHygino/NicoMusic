import React, { useState, useEffect, createContext } from 'react';
import { playResume } from 'services/spotifyApi/endpoints';

export const UriContext = createContext();

export const UriProvider = ({ children, token }) => {
  const [contextUri, setContextUri] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [offset, setOffset] = useState(null);
  const value = { 
    contextUri,
    setContextUri,
    offset,
    setOffset,
    deviceId,
    setDeviceId,
  }

  useEffect(() => {
    if (!contextUri) return;
    playResume(token, deviceId, contextUri, offset);
  }, [contextUri, deviceId, offset, token]);

  return <UriContext.Provider value={value}>{children}</UriContext.Provider>;
};
