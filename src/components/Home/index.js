import React from 'react';
import RecentlyContextItems from './RecentlyContextItems';
import UserRecentlyPlayedSection from './UserRecentlyPlayedSection';

const Home = ({ token }) => {
  return (
    <>
      <RecentlyContextItems token={token} />
      <UserRecentlyPlayedSection token={token} />
    </>
  );
};

export default Home;
