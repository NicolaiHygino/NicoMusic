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
import { useMediaQuery } from 'hooks/useMediaQuery';

const AlbumTrackItem = ({ track, index, onItemClick, isMobile }) => {
  const duration = msToMinsAndSecs(track.duration_ms);
  return (
    <StyledTrackItem onClick={() => onItemClick(track.uri)}>
      {!isMobile && <TrackNumber>
        <p>{index + 1}</p>
      </TrackNumber>}
      <TrackTitle>
        <MusicTitle>{track.name}</MusicTitle>
        <p>{track.artists[0].name}</p>
      </TrackTitle>
      {!isMobile && <TrackDuration>
        <p>{duration}</p>
      </TrackDuration>}
    </StyledTrackItem>
  );
};

const AlbumTrackList = ({ tracks }) => {
  const { setTrackUri } = useContext(UriContext);
  const handleItemClick = newUri => setTrackUri(newUri);
  
  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <SectionWrapper>
      {!isMobile && (
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
      )}

      {tracks.map((track, i) => (
        <AlbumTrackItem
          onItemClick={handleItemClick}
          key={track.id}
          track={track}
          index={i}
          isMobile={isMobile}
        />
      ))}
    </SectionWrapper>
  );
};

export default AlbumTrackList;
