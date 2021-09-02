import { LoginButton } from "components/Button";
import { CenteredContainer } from "components/Layout/Container";
import { objectURLEncoding } from "utils/helpers/objectURLEncoding";

const params = objectURLEncoding({
  client_id: 'a1a6e3d9fe3441f2827747335adcfdfa',
  response_type: 'code',
  redirect_uri: 'http://localhost:3000/',
  scope: 'streaming user-read-email user-read-private user-read-playback-state user-modify-playback-state user-library-read user-library-modify',
});

const AUTH_URL = `https://accounts.spotify.com/authorize?${params}`;

const Login = () => {
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