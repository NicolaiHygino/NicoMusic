import React from 'react';
import {
  MusicInfo,
  TitleWrapper
} from './style';

const MobileTrackInfo = ({ track }) => {
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
