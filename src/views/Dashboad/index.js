import React, { useState, useEffect } from 'react';
import Sidebar from 'components/Sidebar';
import Home from 'components/Home';
import Album from 'components/Album';
import Search from 'components/Search';
import NewPlayer from 'components/NewPlayer';
import { Switch, Route } from 'react-router-dom'; 
import { DashboardDiv, Content } from './style';
import { playResume } from 'services/spotifyApi/endpoints';

const Dashboard = ({ token }) => {
  const [contextUri, setContextUri] = useState(null);
  
  useEffect(() => {
    if (contextUri) {
      console.log(contextUri)
      playResume(token, contextUri);
    }
  }, [token, contextUri]);

  const handleContextUriChange = newContextUri =>
    setContextUri(newContextUri);

  return (<>
    <DashboardDiv>
      <Sidebar />
      <Content>
        <Switch>
          <Route path='/search'>
            <Search 
              token={token} 
              onContextUriChange={handleContextUriChange}
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