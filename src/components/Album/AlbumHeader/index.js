import React from 'react';
import {
  HeadWrapper,
  ImageWrapper,
  ContentText,
  InfoWrapper,
  Artist,
  SpanArtistInfo,
} from './style';

const AlbumHeader = ({ album }) => {
  return (
    <HeadWrapper>
      <ImageWrapper>
        <img src={album.images[1].url} alt={album.name}/>
      </ImageWrapper>
      <ContentText>
        <h2>ALBUM</h2>
        <h1>{album.name}</h1>
        <InfoWrapper>
          <Artist>
            <p>{album.artists[0].name}</p>
          </Artist>
          <SpanArtistInfo>
            2021
          </SpanArtistInfo>
          <SpanArtistInfo>
            {album.total_tracks} musics, 1h 21min
          </SpanArtistInfo>
        </InfoWrapper>
      </ContentText>
    </HeadWrapper>
  );
};

export default AlbumHeader;