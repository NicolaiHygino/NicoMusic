import { AUTH_URL } from "services/spotifyApi/spotifyAuthentication";
import styled from 'styled-components';

const CenteredContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginButton = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--main-red);
  border: 0;
  border-radius: 3px;
  padding: .9em 2em;
  cursor: pointer;
`;

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