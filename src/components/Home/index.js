import React from 'react';
import RecentlyContextItems from './RecentlyContextItems';
import UserPlaylistsSection from './UserPlaylistsSection';

const Home = ({ token }) => {
  return (
    <>
      <RecentlyContextItems token={token} />
      <UserPlaylistsSection token={token} />
    </>
  );
};

export default Home;
