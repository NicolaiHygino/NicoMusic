import React, { useEffect, useState } from 'react';
import Loading from 'components/Loading';
import { 
  AUTH_URL,
  getSpotifyTokens 
} from 'services/spotifyApi/authentication';
import { CenteredContainer } from './style';
import { useHistory } from 'react-router-dom';
import { MainButton } from 'globalStyles';

const Login = ({ setLoginTokens }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const history = useHistory();

  useEffect(() => {
    const code = new URLSearchParams(
      window.location.search
    ).get('code');

    if (code) {    
      setLoading(true)
      getSpotifyTokens(code)
        .then(({data}) => {
          setLoginTokens(
            data.accessToken,
            data.refreshToken,
            data.expiresIn
          );
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
  }, [history, setLoginTokens]);

  const onTryAgainClick = () => {
    setError(false)
    history.push('/');
  }

  if (loading) return <Loading />;

  if (error) {
    return ( 
      <CenteredContainer>
        <p>Something went wrong during the authorization, 
        try again later.</p>
        <MainButton onClick={() => onTryAgainClick()}>Try Again</MainButton>
      </CenteredContainer>
    );
  }

  return (
    <div>
      <CenteredContainer>
        <a href={AUTH_URL}>
          <MainButton>
            Login With Spotify
          </MainButton>
        </a>
      </CenteredContainer>
    </div>
  );
};

export default Login;