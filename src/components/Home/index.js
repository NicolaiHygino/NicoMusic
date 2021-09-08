import React from 'react';
import styled from 'styled-components';
import RecentlyContextItems from './RecentlyContextItems';

const SectionWrapper = styled.div`
  padding: 0 20px;
`;

const Home = ({ token }) => {
  return (<>
    <SectionWrapper>
      <RecentlyContextItems token={token} />
    </SectionWrapper>
  </>);
};

export default Home;