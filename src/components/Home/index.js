import React from 'react';
import RecentlyContextItems from './RecentlyContextItems';
import UserPlaylistsSection from './UserPlaylistsSection';
import { SectionWrapper } from 'globalStyles';

const Home = ({ token }) => {
  return (
    <>
      <SectionWrapper>
        <RecentlyContextItems token={token} />
      </SectionWrapper>

      <UserPlaylistsSection token={token} />
    </>
  );
};

export default Home;
