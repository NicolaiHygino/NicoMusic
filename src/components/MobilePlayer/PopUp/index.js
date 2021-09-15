import React, { useState } from 'react';
import { Background, StyledPopUp } from './style';
import { MainButton } from 'globalStyles';
import { transferUserPlayback } from 'services/spotifyApi/endpoints';

const PopUp = ({ token, deviceId}) => {
  const [hide, setHide] = useState(false);
  
  const handleClick = e => {
    e.stopPropagation();
    transferUserPlayback(token, deviceId);
    setHide(true);
  }
  
  if (hide) return null
  return (
    <Background>
      <StyledPopUp>
        <MainButton onClick={e => handleClick(e)}>
          Agree spotify SDK
        </MainButton>
      </StyledPopUp>
    </Background>
    
  );
};

export default PopUp;