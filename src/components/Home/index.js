import React from 'react';
import RecentlyContextItems from './RecentlyContextItems';
import UserPlaylistSection from './UserPlaylistsSection';

const Home = ({ token }) => {
  return (
    <>
      <RecentlyContextItems token={token} />
      <UserPlaylistSection token={token} />
    </>
  );
};

export default Home;
