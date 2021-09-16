import React from 'react';
import { GlobalStyle } from 'globalStyles';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
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
