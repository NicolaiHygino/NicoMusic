import React from 'react';
import styled from 'styled-components';
import RecentlyContextItems from './RecentlyContextItems';

const SectionWrapper = styled.div`
  padding: 0 20px;
`;

const RecentlyContextsItems = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  row-gap: 16px;
  flex-wrap: wrap;
`;

const ContextItem = styled.div`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, .1);
  height: 80px;
  border-radius: 5px;
  transition: background-color .3s ease;
  overflow: hidden;

  &:hover {
    background-color: rgba(255, 255, 255, .3);
  }
`;

const ImageWrapper = styled.div`
  box-shadow: 0 8px 24px rgba(0,0,0,.5);
  height: 80px;

  & img {
    max-width: 80px;
    max-height: 80px;
    border: 0;
  }
`;

const TitleWrapper = styled.div`
  padding: 1em;
  width: 100%;

  & p {
    margin: 0;
    font-size: 1em;
    font-weight: 700;
  }
`;

const Home = ({ token }) => {
  return (<>
    <SectionWrapper>
      <RecentlyContextItems token={token} />
    </SectionWrapper>
  </>);
};

export default Home;