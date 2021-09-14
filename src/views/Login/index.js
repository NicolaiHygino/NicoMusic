import React, { useEffect, useState } from 'react';
import { 
  AUTH_URL,
  getSpotifyTokens 
} from 'services/spotifyApi/authentication';
import { LoginButton, CenteredContainer } from './style';
import { useHistory } from 'react-router-dom';
import { LoadingSpinner } from 'globalStyles';

const Login = ({ setToken }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  
  console.log(loading)

  useEffect(() => {
    const code = new URLSearchParams(
      window.location.search
    ).get('code');
    
    if (code) {    
      setLoading(true)
      getSpotifyTokens(code)
        .then(res => {
          setToken(res.data.accessToken);
          history.push('/');
          setLoading(false);
        })
        .catch(() => {
          setError(true)
          setLoading(false);
          history.push('/');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [history, setToken]);

  const onTryAgainClick = () => {
    setError(false)
    history.push('/');
  }
  if (loading) {
    return (
      <CenteredContainer>
        <LoadingSpinner></LoadingSpinner>
      </CenteredContainer>
    );
  }

  if (error) {
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