import React from 'react';
import {
  MusicInfo,
  ImageWrapper,
  TitleWrapper
} from './style'


const TrackInfo = ({ track }) => {
  if (!track) return <MusicInfo></MusicInfo>
  return (
    <MusicInfo>
      <ImageWrapper>
        <img src={track.album.images[2].url} alt={track.album.name} />
      </ImageWrapper>
      <TitleWrapper>
        <p>{track.name}</p>
        <span>{track.artists[0].name}</span>
      </TitleWrapper>
    </MusicInfo>
  );
}

export default TrackInfo;
