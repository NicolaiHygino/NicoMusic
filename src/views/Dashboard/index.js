import React from 'react';
import MobileBar from 'components/MobileBar';
import Sidebar from 'components/Sidebar';
import Home from 'components/Home';
import Playlist from 'components/Playlist';
import Album from 'components/Album';
import Search from 'components/Search';
import MobilePlayer from 'components/MobilePlayer';
import Player from 'components/Player';
import { UriProvider } from 'context/UriContext';
import { Switch, Route } from 'react-router-dom';
import { DashboardDiv, Content } from './style';
import { useMediaQuery } from 'hooks/useMediaQuery';

const Dashboard = ({ token }) => {
  const tablet = useMediaQuery('(min-width: 650px)');
  const mobile = useMediaQuery('(max-width: 650px)');
  return (
    <>
      <DashboardDiv>
        {tablet && <Sidebar token={token} />}
        <Content>
          <UriProvider token={token}>
            <Switch>
              <Route path="/search">
                <Search token={token} />
              </Route>
              <Route path="/album/:id">
                <Album token={token} />
              </Route>
              <Route path="/playlist/:id">
                <Playlist token={token} />
              </Route>
              <Route path="/">
                <Home token={token} />
              </Route>
            </Switch>
          </UriProvider>
        </Content>
      </DashboardDiv>
      {tablet && <Player token={token} />}
      {mobile && <MobileBar />}
      {mobile && <MobilePlayer token={token} />}
    </>
  );
};

export default Dashboard;