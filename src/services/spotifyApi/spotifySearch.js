import axios from 'axios';
import { objectToURLParam } from 'services/spotifyApi/objectToUrlParam';

export const spotifySearch = async (searchTerm, accessToken) => {
  const headers = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  }
  const params = objectToURLParam({
    q: searchTerm,
    type: 'track',
  });

  const url = `https://api.spotify.com/v1/search?${params}` 
  
  const res = await axios.get(url, headers)
  return res;
};