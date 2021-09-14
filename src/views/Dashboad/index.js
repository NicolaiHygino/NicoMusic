import React from 'react';
import Sidebar from 'components/Sidebar';
import Home from 'components/Home';
import Playlist from 'components/Playlist';
import Album from 'components/Album';
import Search from 'components/Search';
import Player from 'components/Player';
import { UriProvider } from 'context/UriContext';
import { Switch, Route } from 'react-router-dom';
import { DashboardDiv, Content } from './style';

const Dashboard = ({ token }) => {
  return (
    <>
      <DashboardDiv>
        <Sidebar />
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
      <Player token={token} />
    </>
  );
};

export default Dashboard;
