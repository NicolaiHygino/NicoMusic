import React, { useState } from 'react';
import Sidebar from 'components/Sidebar';
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
          <Route path="/">
            <h1>Home</h1>
          </Route>
        </Switch>
      </Content>
    </DashboardDiv>
    <Player token={token} uris={trackUri}/>
  </>);
};

export default Dashboard;