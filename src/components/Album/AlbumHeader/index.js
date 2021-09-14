import React from 'react';
import { calcFontSize } from 'utils/calcFontSize';
import {
  HeadWrapper,
  ImageWrapper,
  ContentText,
  InfoWrapper,
  Artist,
  SpanArtistInfo,
  Title
} from './style';

const AlbumHeader = ({ album }) => {
  const size = calcFontSize(album.name);
  return (
    <HeadWrapper>
      <ImageWrapper>
        <img src={album.images[1].url} alt={album.name} />
      </ImageWrapper>
      <ContentText>
        <h2>ALBUM</h2>
        <Title fontSize={size}>
          {album.name}
        </Title>
        <InfoWrapper>
          <Artist>
            <p>{album.artists[0].name}</p>
          </Artist>
          <SpanArtistInfo>2021</SpanArtistInfo>
          <SpanArtistInfo>{album.total_tracks} musics, 1h 21min</SpanArtistInfo>
        </InfoWrapper>
      </ContentText>
    </HeadWrapper>
  );
};

export default AlbumHeader;
