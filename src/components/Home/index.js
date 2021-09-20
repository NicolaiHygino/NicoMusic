import React from 'react';
import RecentlyContextItems from './RecentlyContextItems';
import UserPlaylistSection from './UserPlaylistsSection';
import Recommendations from './Recommendations';

const Home = ({ token }) => {
  return (
    <>
      <RecentlyContextItems token={token} />
      <UserPlaylistSection token={token} />
      <Recommendations token={token} />
    </>
  );
};

export default Home;
