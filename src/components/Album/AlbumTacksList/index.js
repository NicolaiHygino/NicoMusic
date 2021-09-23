import React, { useContext } from 'react';
import ClockIcon from 'assets/Icons/ClockIcon';
import { playResume } from 'services/spotifyApi/endpoints';
import { SectionWrapper } from 'globalStyles';
import { msToMinsAndSecs } from 'utils/msConverter';
import { UriContext } from 'context/UriContext';
import { useMediaQuery } from 'hooks/useMediaQuery';
import {
  TopGuide,
  TrackNumber,
  TrackTitle,
  TrackDuration,
  StyledTrackItem,
  MusicTitle,
} from './style';

const AlbumTrackItem = ({ track, index, onItemClick, isMobile }) => {
  const duration = msToMinsAndSecs(track.duration_ms);
  return (
    <StyledTrackItem onClick={() => onItemClick(index, track.uri)}>
      {!isMobile && (
        <TrackNumber>
          <p>{index + 1}</p>
        </TrackNumber>
      )}
      <TrackTitle>
        <MusicTitle>{track.name}</MusicTitle>
        <p>{track.artists[0].name}</p>
      </TrackTitle>
      {!isMobile && (
        <TrackDuration>
          <p>{duration}</p>
        </TrackDuration>
      )}
    </StyledTrackItem>
  );
};

const AlbumTrackList = ({ tracks, contextUri, token }) => {
  const { deviceId, setContextUri, setTrackUri } = useContext(UriContext);
  const handleItemClick = (offset, trackUri) => {
    setContextUri(contextUri);
    setTrackUri(trackUri);
    playResume(token, deviceId, contextUri, offset);
  };

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
