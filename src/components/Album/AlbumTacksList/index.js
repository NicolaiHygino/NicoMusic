import React, { useContext } from 'react';
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
import { msToMinsAndSecs } from 'utils/msConverter';
import { UriContext } from 'context/UriContext';

const AlbumTrackItem = ({ track, index, onItemClick }) => {
  const duration = msToMinsAndSecs(track.duration_ms);
  return (
    <StyledTrackItem onClick={() => onItemClick(track.uri)}>
      <TrackNumber>
        <p>{index + 1}</p>
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
  const { setTrackUri } = useContext(UriContext);
  const handleItemClick = newUri => setTrackUri(newUri);

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
        <AlbumTrackItem
          onItemClick={handleItemClick}
          key={track.id}
          track={track}
          index={i}
        />
      ))}
    </SectionWrapper>
  );
};

export default AlbumTrackList;
