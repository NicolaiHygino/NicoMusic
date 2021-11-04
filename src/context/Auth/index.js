import React, { useContext, createContext } from 'react';
import { useSpotifyToken } from 'hooks/useSpotifyToken';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const ProvideAuth = ({ children }) => {
  const auth = useSpotifyToken();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
