import React from 'react';
import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import { UriProvider } from 'context/UriContext';
import { useAuth } from 'context/Auth';

function App() {
  const { token } = useAuth();

  if (!token) return <Login />;
  return (
    <UriProvider>
      <Dashboard />
    </UriProvider>
  );
};

export default App;
