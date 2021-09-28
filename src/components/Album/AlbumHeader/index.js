import React from 'react';
import { calcFontSize } from 'utils/calcFontSize';
import { smallerImg } from 'utils/smallerImg';
import { msToHoursAndMins, msToMinsAndSecs } from 'utils/msConverter';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { Link } from 'react-router-dom';
import {
  HeadWrapper,
  ImageWrapper,
  ArtistImg,
  ContentText,
  InfoWrapper,
  Artist,
  StyledSpan,
  Title
} from './style';

const AlbumHeader = ({ album, artist }) => {
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

  const artistImgUrl = smallerImg(artist.images).url;
  
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
            <ArtistImg>
              <img src={artistImgUrl} alt={artist.name}/>
            </ArtistImg>
            <Link to={`/artist/${artist.id}`}> 
              <Artist>{album.artists[0].name}</Artist>
            </Link>
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
