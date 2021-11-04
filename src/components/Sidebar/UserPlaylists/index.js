import React, { useEffect, useState } from 'react';
import { getUserPlaylists } from 'services/spotifyApi/endpoints';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledUl = styled.ul`
  width: 100%;
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
    padding: 0 10px;
  }
`;

const PlaylistItem = ({ name, id }) =>
  <Link to={`/playlist/${id}`}>
    <li><p>{name}</p></li>
  </Link>

const UserPlaylists = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getUserPlaylists().then(res => setPlaylists(res.data.items));
  }, []);

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
