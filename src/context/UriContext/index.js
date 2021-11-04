import React, { useState, createContext } from 'react';

export const UriContext = createContext();

export const UriProvider = ({ children }) => {
  const [contextUri, setContextUri] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [trackUri, setTrackUri] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  
  const value = {
    contextUri,
    setContextUri,
    trackUri,
    setTrackUri,
    isPaused,
    setIsPaused,
    deviceId,
    setDeviceId,
  }

  return <UriContext.Provider value={value}>{children}</UriContext.Provider>;
};
