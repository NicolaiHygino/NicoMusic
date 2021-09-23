import React from 'react';
import TopBar from 'components/TopBar';
import MobileNavBar from 'components/MobileNavBar';
import Library from 'components/Library';
import Sidebar from 'components/Sidebar';
import Home from 'components/Home';
import Playlist from 'components/Playlist';
import Album from 'components/Album';
import Search from 'components/Search';
import MobilePlayer from 'components/MobilePlayer';
import Player from 'components/Player';
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
          {tablet && <TopBar token={token} />}
          <Switch>
            <Route path="/search">
              <Search token={token} />
            </Route>
            <Route path="/library">
              <Library token={token} />
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
        </Content>
      </DashboardDiv>
      {tablet && <Player token={token} />}
      {mobile && <MobileNavBar />}
      {mobile && <MobilePlayer token={token} />}
    </>
  );
};

export default Dashboard;
