import React, { useState } from 'react';
import Sidebar from 'components/Sidebar';
import Home from 'components/Home';
import Album from 'components/Album';
import Search from 'components/Search';
import Player from 'components/Player';
import { Switch, Route } from 'react-router-dom'; 
import { DashboardDiv, Content } from './style';

const Dashboard = ({ token }) => {
  const [trackUri, setTrackUri] = useState([]);

  const handleUriChange = newUri =>
    setTrackUri(newUri);

  return (<>
    <DashboardDiv>
      <Sidebar />
      <Content>
        <Switch>
          <Route path='/search'>
            <Search 
              token={token} 
              onUriChange={handleUriChange}
            />
          </Route>
          <Route path="/album/:id">
            <Album token={token} />
          </Route>
          <Route path="/">
            <Home token={token} />
          </Route>
        </Switch>
      </Content>
    </DashboardDiv>
    <Player token={token} uris={trackUri}/>
  </>);
};

export default Dashboard;