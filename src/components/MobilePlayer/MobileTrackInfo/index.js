import React from 'react';
import {
  MusicInfo,
  TitleWrapper
} from './style';

const MobileTrackInfo = ({ track, errorMessage }) => {
  
  if (errorMessage) {
    return (
      <MusicInfo>
      <TitleWrapper>
        {<p>{errorMessage}</p>}
      </TitleWrapper>
    </MusicInfo>
    );
  }
  
  if (!track) return <MusicInfo></MusicInfo>
  return (
    <MusicInfo>
      <TitleWrapper>
        {<p>{track.name} <span>{track.artists[0].name}</span></p>}
      </TitleWrapper>
    </MusicInfo>
  );
}

export default MobileTrackInfo;
