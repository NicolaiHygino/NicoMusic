import React, { useEffect, useState } from 'react';
import { getUserPlaylists } from 'services/spotifyApi/endpoints';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  width: 130px;
  overflow: hidden;
  
  & p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: var(--scd-track);
  }

  & p:hover {
    color: white;
  }

  & a {
    text-decoration: none;
  }
  
  & li {
    height: 32px;
  }

`;

const PlaylistItem = ({ name, id }) =>
  <Link to={`/playlist/${id}`}>
    <li>
      <p>{name}</p>
    </li>
  </Link>

const UserPlaylists = ({ token }) => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    if (!token) return
    getUserPlaylists(token)
      .then(res => setPlaylists(res.data.items));
  }, [token]);
  
  if (!playlists) return null;
  return (
    <StyledUl>
      {playlists.map(playlist => 
        <PlaylistItem
          key={`sidebar${playlist.id}`}
          name={playlist.name}
          id={playlist.id}
        />
      )}
    </StyledUl>
  );
};

export default UserPlaylists;
