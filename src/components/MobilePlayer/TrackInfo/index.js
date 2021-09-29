import React from 'react';
import {
  MusicInfo,
  ImageWrapper,
  TitleWrapper
} from './style'
import { Link } from 'react-router-dom';

const TrackInfo = ({ track }) => {
  if (!track) return <MusicInfo></MusicInfo>;
  
  const artistId = track.artists[0].uri.split(':')[2];
  return (
    <MusicInfo>
      <ImageWrapper>
        <img src={track.album.images[2].url} alt={track.album.name} />
      </ImageWrapper>
      <TitleWrapper>
        <p>{track.name}</p>
        <Link to={`/artist/${artistId}`}>
          <span>{track.artists[0].name}</span>
        </Link>
      </TitleWrapper>
    </MusicInfo>
  );
}

export default TrackInfo;
