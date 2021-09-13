import React from 'react';
import { SectionWrapper } from 'globalStyles';
import ClockIcon from 'assets/Icons/ClockIcon';
import {
  TopGuide,
  TrackNumber,
  TrackTitle,
  TrackDuration,
  StyledTrackItem,
  MusicTitle,
} from './style';
import { msToMinsAndSecs } from 'utils/msToMinsAndSecs';

const AlbumTrackItem = ({ track, index }) => {
  const duration = msToMinsAndSecs(track.duration_ms);
  return (
    <StyledTrackItem>
      <TrackNumber>
        <p>{index}</p>
      </TrackNumber>
      <TrackTitle>
        <MusicTitle>{track.name}</MusicTitle>
        <p>{track.artists[0].name}</p>
      </TrackTitle>
      <TrackDuration>
        <p>{duration}</p>
      </TrackDuration>
    </StyledTrackItem>
  );
};

const AlbumTrackList = ({ tracks }) => {
  return (
    <SectionWrapper>
      <TopGuide>
        <TrackNumber>
          <p>#</p>
        </TrackNumber>
        <TrackTitle>
          <p>TÍTULO</p>
        </TrackTitle>
        <TrackDuration>
          <ClockIcon />
        </TrackDuration>
      </TopGuide>

      {tracks.map((track, i) => (
        <AlbumTrackItem key={track.id} track={track} index={i} />
      ))}
    </SectionWrapper>
  );
};

export default AlbumTrackList;
