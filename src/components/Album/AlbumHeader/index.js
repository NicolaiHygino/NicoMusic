import React from 'react';
import { calcFontSize } from 'utils/calcFontSize';
import { msToHoursAndMins, msToMinsAndSecs } from 'utils/msConverter';
import { useMediaQuery } from 'hooks/useMediaQuery';
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
  const releaseYear = album.release_date.split('-')[0];
  const size = calcFontSize(album.name);
  const isMobile = useMediaQuery('(max-width: 600px)')
  
  const albumDuration = album.tracks.items
    .map((item) => item.duration_ms)
    .reduce((previous, current) => previous + current)

  const oneHourInMs = 3600000;
  const albumDurationConverted = albumDuration < oneHourInMs
    ? msToMinsAndSecs(albumDuration, 'h')
    : msToHoursAndMins(albumDuration);
  
  return (
    <HeadWrapper>
      <ImageWrapper>
        <img src={album.images[1]?.url} alt={album.name} />
      </ImageWrapper>
      <ContentText>
       {!isMobile && <h2>ALBUM</h2>}
        <Title fontSize={size}>
          {album.name}
        </Title>
        {isMobile && <Artist>{album.artists[0].name}</Artist>}
        {!isMobile ? (
          <InfoWrapper>
            <Artist>{album.artists[0].name}</Artist>
            <StyledSpan>{ releaseYear }</StyledSpan>
            <StyledSpan>
              {album.total_tracks} musics, {albumDurationConverted}
            </StyledSpan>
          </InfoWrapper>
        ) : null }
      </ContentText>
    </HeadWrapper>
  );
};

export default AlbumHeader;
