import React from 'react';
import RecentlyContextItems from './RecentlyContextItems';
import {
  SectionWrapper,
  SectionHeaderWrapper,
  SectionHeader,
} from 'globalStyles';

const Home = ({ token }) => {
  return (
    <>
      <SectionWrapper>
        <RecentlyContextItems token={token} />
      </SectionWrapper>
      <SectionWrapper>
        <SectionHeaderWrapper>
          <SectionHeader>
            Artists you like the most!
          </SectionHeader>
        </SectionHeaderWrapper>
      </SectionWrapper>
    </>
  );
};

export default Home;
