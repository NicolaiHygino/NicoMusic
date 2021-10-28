import axios from 'axios';
import { objectToURLParam } from 'services/spotifyApi/objectToUrlParam';

const headers = {};

const accessToken = localStorage.getItem('accessToken');

if (accessToken) {
  headers.Authorization = `Bearer ${accessToken}`;
}

const spotifyAxios = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  headers,
});

export const spotifySearch = async (searchTerm, token) => {
  const params = objectToURLParam({
    q: searchTerm,
    type: 'track',
  });
  return await spotifyAxios.get(`/search?${params}`);
};

export const getRecentlyTracks = async (token, limit = 20) => {
  const params = objectToURLParam({ limit });
  return await spotifyAxios.get(`/me/player/recently-played?${params}`);
};

export const getAlbum = async (token, albumId) => {
  return await spotifyAxios.get(`/albums/${albumId}`);
};

export const getMultipleAlbums = async (token, albumIds) => {
  const params = objectToURLParam({ 
    ids: albumIds,
  });
  return await spotifyAxios.get(`/albums?${params}`);
};

export const getPlaylist = async (token, playlistId) => {
  return await spotifyAxios.get(`/playlists/${playlistId}`);
};

export const getArtist = async (token, artistId) => {
  return await spotifyAxios.get(`/artists/${artistId}`);
};

export const getArtistAlbums = async (token, artistId, group = '', limit = 20) => {
  const params = objectToURLParam({ 
    include_groups: group,
    market: 'from_token',
    limit: limit,
  });
  return await spotifyAxios.get(`/artists/${artistId}/albums?${params}`);
};

export const getArtistTopTracks = async (token, artistId) => {
  const params = objectToURLParam({ market: 'from_token' });
  return await spotifyAxios.get(`/artists/${artistId}/top-tracks?${params}`);
};

export const getUserPlaylists = async (token, limit = 50) => {
  const params = objectToURLParam({ limit })
  return await spotifyAxios.get(`/me/playlists?${params}`);
};

export const getUserAlbums = async (token, limit = 50) => {
  const params = objectToURLParam({ limit });
  return await spotifyAxios.get(`/me/albums?${params}`);
}

export const getUserArtistis = async (token, limit = 50) => {
  const params = objectToURLParam({ limit, type: 'artist' });
  return await spotifyAxios.get(`/me/following?${params}`);
}

export const getUserProfile = async (token) => {
  return await spotifyAxios.get('/me');
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
  return await spotifyAxios.get(`/recommendations?${params}`);
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

export const transferUserPlayback = async (token, deviceId) => {
  const data = { device_ids: [deviceId] };
  return await spotifyAxios.put('/me/player', data);
};

export const playResume = async (token, deviceId, contextUri, offset = 0) => {
  const params = objectToURLParam({ device_id: deviceId });

  const data = Array.isArray(contextUri)
    ? { uris: contextUri }
    : { 
      context_uri: contextUri,
      offset: {
        position: offset,
      }
    };
  return await spotifyAxios.put(`/me/player/play?${params}`, data);
};

export const putShuffle = async (token, state) => {
  const params = objectToURLParam({ state });
  return await spotifyAxios.put(`/me/player/shuffle?${params}`);
};

export const seekToPosition = async (token, positionMs, deviceId) => {
  const params = objectToURLParam({
    position_ms: positionMs,
    device_ids: deviceId,
  });
  return await spotifyAxios.put(`/me/player/seek?${params}`);
};
