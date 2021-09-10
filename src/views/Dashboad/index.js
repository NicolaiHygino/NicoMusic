import React, { useState } from 'react';
import Sidebar from 'components/Sidebar';
import Home from 'components/Home';
import Album from 'components/Album';
import Search from 'components/Search';
import NewPlayer from 'components/NewPlayer';
import { Switch, Route } from 'react-router-dom'; 
import { DashboardDiv, Content } from './style';

const Dashboard = ({ token }) => {
  const [trackUri, setTrackUri] = useState([]);
  console.log(trackUri)

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
    <NewPlayer token={token}/>
  </>);
};

export default Dashboard;