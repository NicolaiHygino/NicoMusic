import React from 'react';
import RecentlyContextItems from './RecentlyContextItems';
import UserPlaylistSection from './UserPlaylistsSection';
import Recommendations from './Recommendations';

const Home = () => {
  return (
    <>
      <RecentlyContextItems/>
      <UserPlaylistSection/>
      <Recommendations/>
    </>
  );
};

export default Home;
