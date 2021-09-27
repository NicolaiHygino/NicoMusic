import axios from 'axios';
import { objectToURLParam } from 'services/spotifyApi/objectToUrlParam';

const headers = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const spotifySearch = async (searchTerm, token) => {
  const params = objectToURLParam({
    q: searchTerm,
    type: 'track',
  });

  const url = `https://api.spotify.com/v1/search?${params}`;

  const res = await axios.get(url, headers(token));
  return res;
};

export const getRecentlyTracks = async (token, limit = 20) => {
  const params = objectToURLParam({ limit });

  const url = `https://api.spotify.com/v1/me/player/recently-played?${params}`;

  const res = await axios.get(url, headers(token));
  return res;
};

export const getAlbum = async (token, albumId) => {
  const url = `https://api.spotify.com/v1/albums/${albumId}`;
  const res = await axios.get(url, headers(token));
  return res;
};

export const getPlaylist = async (token, playlistId) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}`;
  const res = await axios.get(url, headers(token));
  return res;
};

export const getArtist = async (token, artistId) => {
  const url = `https://api.spotify.com/v1/artists/${artistId}`;
  const res = await axios.get(url, headers(token));
  return res;
};

export const getArtistTopTracks = async (token, artistId) => {
  const params = objectToURLParam({ market: 'from_token' });
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?${params}`;
  const res = await axios.get(url, headers(token));
  return res;
};

export const getUserPlaylists = async (token, limit = 50) => {
  const params = objectToURLParam({ limit })
  const url = `https://api.spotify.com/v1/me/playlists?${params}`;

  const res = await axios.get(url, headers(token));
  return res;
};

export const getUserAlbums = async (token, limit = 50) => {
  const params = objectToURLParam({ limit });
  const url = `https://api.spotify.com/v1/me/albums?${params}`;

  const res = await axios.get(url, headers(token));
  return res;
}

export const getUserArtistis = async (token, limit = 50) => {
  const params = objectToURLParam({ limit, type: 'artist' });
  const url = `https://api.spotify.com/v1/me/following?${params}`;

  const res = await axios.get(url, headers(token));
  return res;
}

export const getUserProfile = async (token) => {
  const url = 'https://api.spotify.com/v1/me';

  const res = await axios.get(url, headers(token));
  return res;
};

export const getRecommendations = async (
  token,
  limit = 20,
  seedTracks = '',
  seedArtists = '',
  seedGenres = '',
) => {
  const params = objectToURLParam({
    limit,
    seed_tracks: seedTracks,
    seed_artitsts: seedArtists,
    seed_genres: seedGenres,
  });

  const url = `https://api.spotify.com/v1/recommendations?${params}`;

  const data = await axios.get(url, headers(token));
  return data;
};

/**
 * Receive an user's receltly played tracks and filter the
 * context
 * @param {Object[]} items - Array with recently played tracks objects
 * @returns {Object[]} - Array of filtered objects with id and type
 */
const contextFilter = (items) => {
  let contextList = [];
  items.forEach((item) => {
    const id = item?.context 
      ? item.context.uri.split(':')[2]
      : item.track.album.id;
    const type = item?.context
      ? item.context.type
      : 'album';
    if (contextList.every((item) => item.id !== id)) {
      contextList = [...contextList, { id, type }];
    }
  });
  return contextList;
};

/**
 * Fetch user's recently played tracks and filter the contexts
 * that they had been played
 * @param {String} token - Spotify acesss token
 * @returns {Object[]} - An array of Album or Playlist objects
 */
export const getRecentlyPlayedContexts = async (token) => {
  const recentlyTracks = await getRecentlyTracks(token, 50);

  const recentlyContextIds = contextFilter(recentlyTracks.data.items);
  const recentlyContextData = await Promise.all(
    recentlyContextIds.map(async (item) => {
      let res;
      switch (item.type) {
        case 'playlist':
          res = await getPlaylist(token, item.id);
          break;
        case 'album':
          res = await getAlbum(token, item.id);
          break;
        case 'artist':
          return;
        default:
          throw new Error(`${item.type} type does not exists.`);
      }
      return res.data;
    })
  );
  return recentlyContextData;
};

export const transferUserPlayback = (token, deviceId) => {
  const data = {
    device_ids: [deviceId],
    // play: false,
  };

  const url = 'https://api.spotify.com/v1/me/player';

  axios.put(url, data, headers(token)).catch(console.log);
};

export const playResume = (token, deviceId, contextUri, offset = 0) => {
  const params = objectToURLParam({ device_id: deviceId });

  const data = Array.isArray(contextUri)
    ? { uris: contextUri }
    : { 
      context_uri: contextUri,
      offset: {
        position: offset,
      }
    };
  
  const url = `https://api.spotify.com/v1/me/player/play?${params}`;
  
  axios.put(url, data, headers(token));
};

export const putShuffle = async (token, state) => {
  const params = objectToURLParam({ state });
  const url = `https://api.spotify.com/v1/me/player/shuffle?${params}`
  await axios.put(url, null, headers(token));
}

export const seekToPosition = (token, positionMs, deviceId) => {
  const params = objectToURLParam({
    position_ms: positionMs,
    device_ids: deviceId,
  });

  const url = `https://api.spotify.com/v1/me/player/seek?${params}`;

  axios.put(url, null, headers(token));
};
