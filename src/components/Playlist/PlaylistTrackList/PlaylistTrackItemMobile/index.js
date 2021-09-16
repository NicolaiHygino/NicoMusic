import React from 'react';
import {
  TrackInfo,
  StyledTrackItem,
  MusicTitle,
  TitleWrapper,
} from '../style';

const PlaylistTrackItemMobile = ({ item, onItemClick}) => {
  const track = item.track;

  return (
    <StyledTrackItem onClick={() => onItemClick(track.uri)}>
      <TrackInfo role="cell">
        <TitleWrapper>
          <MusicTitle>{track.name}</MusicTitle>
          <p>{track.artists[0].name}</p>
        </TitleWrapper>
      </TrackInfo>
    </StyledTrackItem>
  );
};

export default PlaylistTrackItemMobile;