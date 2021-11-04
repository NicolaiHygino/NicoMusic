import React from 'react';
import TopBar from 'components/TopBar';
import MobileNavBar from 'components/MobileNavBar';
import Library from 'components/Library';
import Sidebar from 'components/Sidebar';
import Home from 'components/Home';
import Artist from 'components/Artist';
import Playlist from 'components/Playlist';
import Album from 'components/Album';
import Search from 'components/Search';
import MobilePlayer from 'components/MobilePlayer';
import Player from 'components/Player';
import { Switch, Route } from 'react-router-dom';
import { DashboardDiv, Content } from './style';
import { useMediaQuery } from 'hooks/useMediaQuery';

const Dashboard = () => {
  const tablet = useMediaQuery('(min-width: 650px)');
  const mobile = useMediaQuery('(max-width: 650px)');
  return (
    <>
      <DashboardDiv>
        {tablet && <Sidebar />}
        <Content>
          {tablet && <TopBar />}
          <Switch>
            <Route path="/search"><Search /></Route>
            <Route path="/library"><Library /></Route>
            <Route path="/artist/:id"><Artist /></Route>
            <Route path="/album/:id"><Album /></Route>
            <Route path="/playlist/:id"><Playlist /></Route>
            <Route path="/"><Home /></Route>
          </Switch>
        </Content>
      </DashboardDiv>
      {tablet && <Player />}
      {mobile && <MobilePlayer />}
      {mobile && <MobileNavBar />}
    </>
  );
};

export default Dashboard;
