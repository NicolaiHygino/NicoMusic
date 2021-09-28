import styled from 'styled-components';

export const StyledMobilePlayer = styled.footer`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 60px;
  padding: 0 5px;
  height: 50px;
  width: 100%;
  background-color: var(--bg-hover);
  border-top: 1px solid #282828;
`;

export const IconButton = styled.button`
  color: #fff;
  background-color: rgba(0,0,0,0);
  border: 0;
  width: 32px;
  height: 32px;
  line-height: 0;
  margin: 0 4px;
  cursor: pointer;
`;
