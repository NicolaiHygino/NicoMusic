import React from 'react';
import { SectionWrapper } from 'globalStyles';
import ClockIcon from 'assets/Icons/ClockIcon';
import {
  TopGuide,
  TrackNumber,
  TrackTitle,
  TrackAlbum,
  TrackAddedAt,
  TrackDuration,
  StyledTrackItem,
  MusicTitle,
} from './style';
import { msToMinsAndSecs } from 'utils/msToMinsAndSecs';


const PlaylistTrackItem = ({ item, index }) => {
  const duration = msToMinsAndSecs(item.track.duration_ms);
  const date = new Date(item.added_at);

  const day = date.getDate();
  const month = date.toLocaleString('en', {month: 'long'});
  const year = date.getFullYear();

  return (
    <StyledTrackItem>
      <TrackNumber role="cell">
        <p>{index}</p>
      </TrackNumber>
      <TrackTitle role="cell">
        <MusicTitle>{item.track.name}</MusicTitle>
        <p>{item.track.artists[0].name}</p>
      </TrackTitle>
      <TrackAlbum role="cell">
        <p>{item.track.album.name}</p>
      </TrackAlbum>
      <TrackAddedAt role="cell">
        <p>{`${day} ${month} ${year}`}</p>
      </TrackAddedAt>
      <TrackDuration role="cell">
        <p>{duration}</p>
      </TrackDuration>
    </StyledTrackItem>
  );
};

const PlaylistTrackList = ({ trackItems }) => {
  return (
    <SectionWrapper>
      <TopGuide>
        <TrackNumber>
          <p>#</p>
        </TrackNumber>
        <TrackTitle>
          <p>TÍTULO</p>
        </TrackTitle>
        <TrackAlbum>
          <p>ALBUM</p>
        </TrackAlbum>
        <TrackAddedAt>
          <p>ADDED ON</p>
        </TrackAddedAt>
        <TrackDuration>
          <ClockIcon />
        </TrackDuration>
      </TopGuide>

      {trackItems.map((item, i) => (
        <PlaylistTrackItem key={item.track.id} item={item} index={i} />
      ))}
    </SectionWrapper>
  );
};

export default PlaylistTrackList;
