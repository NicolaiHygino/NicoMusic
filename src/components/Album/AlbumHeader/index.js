import React from 'react';
import { calcFontSize } from 'utils/calcFontSize';
import { msToHoursAndMins } from 'utils/msConverter';
import {
  HeadWrapper,
  ImageWrapper,
  ContentText,
  InfoWrapper,
  Artist,
  StyledSpan,
  Title
} from './style';

const AlbumHeader = ({ album }) => {
  const size = calcFontSize(album.name);
  
  const albumDuration = msToHoursAndMins(
    album.tracks.items
      .map((item) => item.duration_ms)
      .reduce((previous, current) => previous + current)
  );
  
  return (
    <HeadWrapper>
      <ImageWrapper>
        <img src={album.images[1]?.url} alt={album.name} />
      </ImageWrapper>
      <ContentText>
        <h2>ALBUM</h2>
        <Title fontSize={size}>
          {album.name}
        </Title>
        <InfoWrapper>
          <Artist>{album.artists[0].name}</Artist>
          <StyledSpan>2021</StyledSpan>
          <StyledSpan>{album.total_tracks} musics, {albumDuration}</StyledSpan>
        </InfoWrapper>
      </ContentText>
    </HeadWrapper>
  );
};

export default AlbumHeader;
