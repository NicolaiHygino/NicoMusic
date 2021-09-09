import React from 'react';
import { GlobalStyle } from 'globalStyles';
import Login from 'views/login';
import Dashboard from 'views/Dashboad';
import useToken from './hooks/useToken';

function App() {
  const [token, setToken] = useToken();

  if (!token) {
    return (<>
      <GlobalStyle />
      <Login setToken={setToken}/>
    </>);
  };

  return (<>
    <GlobalStyle />
    <Dashboard token={token} />  
  </>);
};

export default App;
