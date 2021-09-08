import React from 'react';
import RecentlyContextItems from './RecentlyContextItems';
import { SectionWrapper } from 'globalStyles';

const Home = ({ token }) => {
  return (<>
    <SectionWrapper>
      <RecentlyContextItems token={token} />
    </SectionWrapper>
  </>);
};

export default Home;