import axios from 'axios';

const getSpotifyTokens = async (code) => {
  const result = await axios.post('http://localhost:3001/login', {code});
  return result;
};

export { getSpotifyTokens };