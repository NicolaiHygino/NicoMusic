import styled from 'styled-components';

export const StyledPlayer = styled.footer`
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  bottom: 0;
  height: 90px;
  width: 100%;
  background-color: #181818;
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

export const VolumeControl = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding-right: 16px;
`;

export const VolumeWrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  width: 125px;
`;
