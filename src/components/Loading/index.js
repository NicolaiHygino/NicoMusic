import React from 'react';
import styled from 'styled-components';
import { CenterWrapper } from 'globalStyles';

export const LoadingSpinner = styled.div`
  border: 5px solid var(--track-bg);
  border-top: 5px solid var(--main-red);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loading = () => {
  return (
    <CenterWrapper>
      <LoadingSpinner />
    </CenterWrapper>
  );
};

export default Loading;