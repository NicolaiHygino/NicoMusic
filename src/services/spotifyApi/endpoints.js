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
  return await axios.get(url, headers(token));
};

export const getRecentlyTracks = async (token, limit = 20) => {
  const params = objectToURLParam({ limit });
  const url = `https://api.spotify.com/v1/me/player/recently-played?${params}`;
  return await axios.get(url, headers(token));
};

export const getAlbum = async (token, albumId) => {
  const url = `https://api.spotify.com/v1/albums/${albumId}`;
  return await axios.get(url, headers(token));
};

export const getMultipleAlbums = async (token, albumIds) => {
  const params = objectToURLParam({ 
    ids: albumIds,
  });
  const url = `https://api.spotify.com/v1/albums?${params}`;
  return await axios.get(url, headers(token));
};

export const getPlaylist = async (token, playlistId) => {
  const url = `https://api.spotify.com/v1/playlists/${playlistId}`;
  return await axios.get(url, headers(token));
};

export const getArtist = async (token, artistId) => {
  const url = `https://api.spotify.com/v1/artists/${artistId}`;
  return await axios.get(url, headers(token));
};

export const getArtistAlbums = async (token, artistId, group = '', limit = 20) => {
  const params = objectToURLParam({ 
    include_groups: group,
    market: 'from_token',
    limit: limit,
  });
  const url = `https://api.spotify.com/v1/artists/${artistId}/albums?${params}`;
  return await axios.get(url, headers(token));
};

export const getArtistTopTracks = async (token, artistId) => {
  const params = objectToURLParam({ market: 'from_token' });
  const url = `https://api.spotify.com/v1/artists/${artistId}/top-tracks?${params}`;
  return await axios.get(url, headers(token));
};

export const getUserPlaylists = async (token, limit = 50) => {
  const params = objectToURLParam({ limit })
  const url = `https://api.spotify.com/v1/me/playlists?${params}`;
  return await axios.get(url, headers(token));
};

export const getUserAlbums = async (token, limit = 50) => {
  const params = objectToURLParam({ limit });
  const url = `https://api.spotify.com/v1/me/albums?${params}`;
  return await axios.get(url, headers(token));
}

export const getUserArtistis = async (token, limit = 50) => {
  const params = objectToURLParam({ limit, type: 'artist' });
  const url = `https://api.spotify.com/v1/me/following?${params}`;
  return await axios.get(url, headers(token));
}

export const getUserProfile = async (token) => {
  const url = 'https://api.spotify.com/v1/me';
  return await axios.get(url, headers(token));
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
  return await axios.get(url, headers(token));
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
  const url = 'https://api.spotify.com/v1/me/player';
  return await axios.put(url, data, headers(token));
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
  
  const url = `https://api.spotify.com/v1/me/player/play?${params}`;
  return await axios.put(url, data, headers(token));
};

export const putShuffle = async (token, state) => {
  const params = objectToURLParam({ state });
  const url = `https://api.spotify.com/v1/me/player/shuffle?${params}`
  return await axios.put(url, null, headers(token));
};

export const seekToPosition = async (token, positionMs, deviceId) => {
  const params = objectToURLParam({
    position_ms: positionMs,
    device_ids: deviceId,
  });

  const url = `https://api.spotify.com/v1/me/player/seek?${params}`;
  return await axios.put(url, null, headers(token));
};
