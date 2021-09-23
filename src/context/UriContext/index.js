import React, { useState, createContext } from 'react';

export const UriContext = createContext();

export const UriProvider = ({ children }) => {
  const [contextUri, setContextUri] = useState(null);
  const [trackUri, setTrackUri] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const value = {
    contextUri,
    setContextUri,
    trackUri,
    setTrackUri,
    deviceId,
    setDeviceId,
  }

  return <UriContext.Provider value={value}>{children}</UriContext.Provider>;
};
