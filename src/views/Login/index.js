import React, { useEffect } from 'react';
import { 
  AUTH_URL,
  getSpotifyTokens 
} from 'services/spotifyapi/authentication';
import { LoginButton, CenteredContainer } from './style';
import { useHistory } from 'react-router-dom';


const Login = ({ setToken }) => {
  const history = useHistory();

  useEffect(() => {
    const code = new URLSearchParams(
      window.location.search
    ).get('code');
    
    if (code) {    
      getSpotifyTokens(code)
        .then(res => {
          setToken(res.data.accessToken);
          history.push('/');
        })
        .catch(console.log);
    }
  }, []);

  return (
    <div>
      <CenteredContainer>
        <a href={AUTH_URL}>
          <LoginButton>
            Login With Spotify
          </LoginButton>
        </a>
      </CenteredContainer>
    </div>
  );
};

export default Login;