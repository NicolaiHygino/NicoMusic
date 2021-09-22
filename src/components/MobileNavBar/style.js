import styled from 'styled-components';

export const StyledBar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 60px;
  width: 100vw;
  background-color: var(--bg-hover);
  border-top: 1px solid var(--bg-color);
`;

export const Button = styled.button`
  display: flex;
  font-size: 12px;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: 0;
  color: white;
`;