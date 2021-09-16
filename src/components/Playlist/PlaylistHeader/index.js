import React from 'react';
import { calcFontSize } from 'utils/calcFontSize';
import {
  HeadWrapper,
  ImageWrapper,
  ContentText,
  InfoWrapper,
  Artist,
  StyledSpan,
  Title
} from './style';

const PlaylistHeader = ({ playlist }) => {
  const size = calcFontSize(playlist.name);

  return (
    <HeadWrapper>
      <ImageWrapper>
        <img src={playlist.images[0].url} alt={playlist.name} />
      </ImageWrapper>
      <ContentText>
        <h2>PLAYLIST</h2>
        <Title fontSize={size}>
          {playlist.name}
        </Title>
        <InfoWrapper>
          <Artist>{playlist.owner.display_name}</Artist>
          <StyledSpan>{playlist.followers.total} followers</StyledSpan>
          <StyledSpan>{playlist.tracks.total} musics, 1h 21min</StyledSpan>
        </InfoWrapper>
      </ContentText>
    </HeadWrapper>
  );
};

export default PlaylistHeader;
