import React from 'react';
import {
  HeadWrapper,
  ImageWrapper,
  ContentText,
  InfoWrapper,
  Artist,
  SpanArtistInfo,
} from './style';

const PlaylistHeader = ({ playlist }) => {
  return (
    <HeadWrapper>
      <ImageWrapper>
        <img src={playlist.images[1].url} alt={playlist.name} />
      </ImageWrapper>
      <ContentText>
        <h2>PLAYLIST</h2>
        <h1>{playlist.name}</h1>
        <InfoWrapper>
          <Artist>
            <p>{playlist.owner.display_name}</p>
          </Artist>
          <SpanArtistInfo>{playlist.followers.total} followers</SpanArtistInfo>
          <SpanArtistInfo>{playlist.tracks.total} musics, 1h 21min</SpanArtistInfo>
        </InfoWrapper>
      </ContentText>
    </HeadWrapper>
  );
};

export default PlaylistHeader;
