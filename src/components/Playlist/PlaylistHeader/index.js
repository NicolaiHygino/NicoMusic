import React from 'react';
import { useMediaQuery } from 'hooks/useMediaQuery';
import { calcFontSize } from 'utils/calcFontSize';
import { msToHoursAndMins, msToMinsAndSecs } from 'utils/msConverter';
import { numberWithDot } from 'utils/numberWithDot';
import {
  HeadWrapper,
  ImageWrapper,
  ContentText,
  InfoWrapper,
  Artist,
  StyledSpan,
  Title,
} from './style';

const PlaylistHeader = ({ playlist }) => {
  const followers = numberWithDot(
    playlist.followers.total
  );
  const size = calcFontSize(playlist.name);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const playlistDuration = playlist.tracks.items
    .map((item) => item.track.duration_ms)
    .reduce((previous, current) => previous + current);

  const oneHourInMs = 3600000;
  const cvtdPlaylistDuration = playlistDuration < oneHourInMs
    ? msToMinsAndSecs(playlistDuration, 'h')
    : msToHoursAndMins(playlistDuration);

  return (
    <HeadWrapper>
      <ImageWrapper>
        <img src={playlist.images[0].url} alt={playlist.name} />
      </ImageWrapper>
      <ContentText>
        {!isMobile ? <h2>PLAYLIST</h2> : null}
        <Title fontSize={size}>{playlist.name}</Title>
        {isMobile && <Artist>{playlist.owner.display_name}</Artist>}
        {!isMobile ? (
          <InfoWrapper>
            <Artist>{playlist.owner.display_name}</Artist>
            <StyledSpan>{followers} followers</StyledSpan>
            <StyledSpan>
              {playlist.tracks.total} musics, {cvtdPlaylistDuration}
            </StyledSpan>
          </InfoWrapper>
        ) : null}
      </ContentText>
    </HeadWrapper>
  );
};

export default PlaylistHeader;
