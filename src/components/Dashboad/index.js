import React, { useState } from 'react';
import Search from 'components/Search';
import Player from 'components/Player';

const Dashboard = ({ code, token }) => {
  const [trackUri, setTrackUri] = useState([]);

  const handleTrackUriChange = newUri =>
    setTrackUri(newUri);

  return (
    <>
      <Search 
        token={token} 
        onClick={handleTrackUriChange}
      />
      <Player token={token} uris={trackUri}/>
    </>
  );
};

export default Dashboard;