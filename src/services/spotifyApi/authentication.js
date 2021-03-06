import axios from 'axios';
import { objectToURLParam } from 'services/spotifyApi/objectToUrlParam';

const REDIRECT_URI = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3000/'
  : process.env.REACT_APP_REDIRECT_URI;

const SERVER_URL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3001'
  : process.env.REACT_APP_SERVER_URL;

const params = objectToURLParam({
  client_id: process.env.REACT_APP_CLIENT_ID,
  response_type: 'code',
  redirect_uri: REDIRECT_URI,
  scope: 'streaming user-follow-read playlist-read-private playlist-read-collaborative user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read user-library-modify user-read-recently-played',
});

export const AUTH_URL = `https://accounts.spotify.com/authorize?${params}`;

export const getSpotifyTokens = async (code) => {
  const url = `${SERVER_URL}/login`;
  const result = await axios.post(url, {code});
  return result;
};

export const refreshSpotifyToken = async (refreshToken) => {
  const url = `${SERVER_URL}/refresh_token`;
  const res = await axios.post(url, {refreshToken});
  return res;
};
