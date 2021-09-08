import axios from 'axios';
import { objectToURLParam } from 'services/spotifyApi/objectToUrlParam';

const params = objectToURLParam({
  client_id: 'a1a6e3d9fe3441f2827747335adcfdfa',
  response_type: 'code',
  redirect_uri: 'http://localhost:3000/',
  scope: 'streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read user-library-modify user-read-recently-played',
});

export const AUTH_URL = `https://accounts.spotify.com/authorize?${params}`;

export const getSpotifyTokens = async (code) => {
  const result = await axios.post('http://localhost:3001/login', {code});
  return result;
};
