import styled from 'styled-components';

export const CenteredContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  & p {
    margin-bottom: 30px;
  }
`;

export const LoginButton = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--main-red);
  border: 0;
  border-radius: 3px;
  padding: .9em 2em;
  cursor: pointer;
`;