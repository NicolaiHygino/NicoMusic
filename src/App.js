import Login from 'components/Login';
import Dashboard from 'components/Dashboad';
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
