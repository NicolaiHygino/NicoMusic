import React from 'react';
import styled, { keyframes } from 'styled-components'

const BarWrapper = styled.div`
  display: inline-flex;
  align-items: flex-end;
  justify-content: right;
  position: relative;
  height: 16px;
  width: 16px;
  padding: 0;
  margin: 0;
`;

const sound = keyframes`
  0% {
    opacity: .35;
    height: 3px; 
  }
  100% {
    opacity: 1;       
    height: 16px;        
  }
`;

const Bar = styled.div`
  position: relative;
  margin-left: 1px;
  background: var(--main-red);
  bottom: 0;
  right: 0;
  height: 3px;
  width: 3px;
  animation: ${sound} ${props => props.duration} linear infinite alternate;
`;

const BarsAnim = () => {
  return (
    <BarWrapper>
      <Bar duration="460ms" />
      <Bar duration="620ms" />
      <Bar duration="530ms"/>
    </BarWrapper>
  );
};

export default BarsAnim;
