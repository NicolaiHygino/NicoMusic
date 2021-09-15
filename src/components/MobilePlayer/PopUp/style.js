import styled from 'styled-components';

export const Background = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 0;
  background-color: rgba(0, 0, 0, .5);
`;

export const StyledPopUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100vw - 20px);
  height: 200px;
  margin: 10px;
  background-color: var(--bg-hover);
  border-radius: 5px;
`;
