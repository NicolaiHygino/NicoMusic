import React, { useEffect } from 'react';
import { 
  AUTH_URL,
  getSpotifyTokens 
} from "services/spotifyApi/Authentication";
import { LoginButton, CenteredContainer } from './style';

const code = new URLSearchParams(
  window.location.search
).get('code');

const Login = ({ setToken }) => {  
  useEffect(() => {
    if (code) {    
      getSpotifyTokens(code)
        .then(res => {
          setToken(res.data.accessToken);
          window.history.pushState({}, '', '/');
        });
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