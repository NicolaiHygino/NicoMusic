import Login from 'views/Login';
import Dashboard from 'views/Dashboard';
import { GlobalStyle } from 'globalStyles';

const code = new URLSearchParams(
  window.location.search
).get('code');

function App() {
  return (
    <>
      <GlobalStyle />
      { code ? <Dashboard code={code} /> : <Login /> }
    </>
  );
}

export default App;
