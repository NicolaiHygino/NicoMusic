import React from 'react';
import {
  TrackInfo,
  StyledTrackItem,
  MusicTitle,
  TitleWrapper,
} from '../style';

const PlaylistTrackItemMobile = ({ item, onItemClick}) => {
  const track = item.track;
  const index = track.nicomusic_index;

  return (
    <StyledTrackItem onClick={() => onItemClick(index)}>
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