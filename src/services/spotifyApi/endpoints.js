import axios from 'axios';
import { objectToURLParam } from 'services/spotifyApi/objectToUrlParam';

const headers = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  }
});

export const spotifySearch = async (searchTerm, token) => {
  const params = objectToURLParam({
    q: searchTerm,
    type: 'track',
  });

  const url = `https://api.spotify.com/v1/search?${params}` 
  
  const res = await axios.get(url, headers(token));
  return res;
};

export const getRecentlyTracks = async (token, limit) => {
  const params = objectToURLParam({ limit });

  const url = `https://api.spotify.com/v1/me/player/recently-played?${params}`;

  const res = await axios.get(url, headers(token));
  return res;
};

export const getAlbum = async (token, albumId) => {
  const url = `https://api.spotify.com/v1/albums/${albumId}`;
  const res = await axios.get(url, headers(token));
  return res;
}

export const getPlaylist = async (token, playlistId) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}`
  const res = await axios.get(url, headers(token));
  return res;
};

/**
 * Receive an user's receltly played tracks and filter the
 * context 
 * @param {Object[]} items - Array with recently played tracks objects
 * @returns {Object[]} - Array of filtered objects with id and type
 */
const contextFilter = items => {
  let contextList = [];
  items
    .filter(item => item?.context)
    .forEach(item => {
      const id = item.context.uri.split(':')[2];
      const type = item.context.type;
      if (contextList.every(item => item.id !== id)) {
        contextList = [ ...contextList, {id, type}]
      }
    });
  return contextList;
};

/**
 * Fetch user's recently played tracks and filter the contexts 
 * that they had been played
 * @param {String} token - Spotify acesss token 
 * @returns {Object[]} - Recently played contexts
 */
export const getRecentPlayedContexts = async (token) => {
  const recentlyTracks = await getRecentlyTracks(token, 50);
  
  const recentlyContextIds = contextFilter(
    recentlyTracks.data.items
  );
  const recentlyContextData = await Promise.all(
    recentlyContextIds.map(async item => {
      let res;
      switch (item.type) {
        case 'playlist':
          res = await getPlaylist(token, item.id);
          break;
        default:
          res = await getAlbum(token, item.id);
          break;
      }
      return res.data;
    })
  );
  return recentlyContextData;
}

export const transferUserPlayback = (token, deviceId) => {
  const data = {
    device_ids: [deviceId],
    play: false
  }

  const url = 'https://api.spotify.com/v1/me/player';

  axios.put(url, data, headers(token))
    .catch(console.log)
};

export const playResume = (token, contextUri) => {
  const url = 'https://api.spotify.com/v1/me/player/play';
  
  const data = contextUri.split(':')[1] === 'track' 
    ? { uris: [contextUri] }
    : { context_uri: contextUri }
  
  axios.put(url, data, headers(token))
    .catch(console.log)
}

export const seekToPosition = (token, positionMs, deviceId) => {
  const params = objectToURLParam({
    position_ms: positionMs,
    device_ids: deviceId,
  });

  const url = `https://api.spotify.com/v1/me/player/seek?${params}`;

  axios.put(url, null, headers(token));
};
