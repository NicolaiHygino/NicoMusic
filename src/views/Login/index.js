import React, { useEffect, useState } from 'react';
import Loading from 'components/Loading';
import { 
  AUTH_URL,
  getSpotifyTokens 
} from 'services/spotifyApi/authentication';
import { CenteredContainer } from './style';
import { useHistory } from 'react-router-dom';
import { MainButton } from 'globalStyles';
import { useAuth } from 'context/Auth';

const Login = () => {
  const auth = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  
  const history = useHistory();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search)
      .get('code');

    if (code) {    
      setIsLoading(true)
      getSpotifyTokens(code).then(({data}) => {
        auth.saveToken(data.accessToken);
        setIsLoading(false);
        history.push('/');
      }).catch(() => {
        setError(true);
        setIsLoading(false);
        history.push('/');
      });
    }
  }, [history, auth]);

  const onTryAgainClick = () => {
    setError(false)
    history.push('/');
  }

  if (isLoading) return <Loading fullHeight />;

  if (error) return ( 
    <CenteredContainer>
      <p>Something went wrong during the authorization, try again later.</p>
      <MainButton onClick={() => onTryAgainClick()}>Try Again</MainButton>
    </CenteredContainer>
  );

  return (
    <CenteredContainer>
      <a href={AUTH_URL}>
        <MainButton>Login With Spotify</MainButton>
      </a>
    </CenteredContainer>
  );
};

export default Login;