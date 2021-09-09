import React, { useEffect, useState } from 'react';
import { 
  AUTH_URL,
  getSpotifyTokens 
} from 'services/spotifyApi/authentication';
import { LoginButton, CenteredContainer } from './style';
import { useHistory } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [error, setError] = useState(false);
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
        .catch(() => {
          setError(true)
          history.push('/');
        });
    }
  }, [history, setToken]);

  const onTryAgainClick = () => {
    setError(false)
    history.push('/');
  }

  if(error) {
    return ( 
      <CenteredContainer>
        <p>Something went wrong during the authorization, 
        try again later.</p>
        <LoginButton onClick={() => onTryAgainClick()}>Try Again</LoginButton>
      </CenteredContainer>
    );
  }

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