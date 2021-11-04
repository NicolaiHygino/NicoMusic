import React, { useContext } from 'react';
import { SectionWrapper } from 'globalStyles';
import ClockIcon from 'assets/Icons/ClockIcon';
import PlaylistTrackItem from './PlaylistTrackItem';
import PlaylistTrackItemMobile from './PlaylistTrackItemMobile'
import { playResume } from 'services/spotifyApi/endpoints';
import { UriContext } from 'context/UriContext';
import { useMediaQuery } from 'hooks/useMediaQuery';
import {
  TopGuide,
  TrackNumber,
  TrackInfo,
  TrackAlbum,
  TrackAddedAt,
  TrackDuration,
} from './style';

const PlaylistTrackList = ({trackItems, contextUri }) => {
  const {
    deviceId,
    setContextUri,
    isPaused,
    trackUri,
    setTrackUri
  } = useContext(UriContext);

  const handleItemClick = (offset, trackUri) => {
    setContextUri(contextUri);
    setTrackUri(trackUri);
    playResume(deviceId, contextUri, offset)
  };

  const hideAddedAt = useMediaQuery('(min-width: 950px)');
  const isMobile = useMediaQuery('(max-width: 600px');

  if (isMobile) {
    return (
      <SectionWrapper>
        {trackItems.map(item => (
        <PlaylistTrackItemMobile
          onItemClick={handleItemClick}
          key={item.track.id}
          item={item}
        />
      ))}
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      <TopGuide>
        <TrackNumber>
          <p>#</p>
        </TrackNumber>
        <TrackInfo>
          <p>TÍTULO</p>
        </TrackInfo>
        <TrackAlbum>
          <p>ALBUM</p>
        </TrackAlbum>
        {hideAddedAt && (
          <TrackAddedAt>
            <p>ADDED AT</p>
          </TrackAddedAt>
        )}
        <TrackDuration>
          <ClockIcon />
        </TrackDuration>
      </TopGuide>

      {trackItems
        .filter(item => item.track.type !== 'episode')
        .map((item, i) => (
          <PlaylistTrackItem
            onItemClick={handleItemClick}
            key={`${i}${item.id}`}
            nowPlaying={trackUri}
            isPaused={isPaused}
            item={item}
            hideAddedAt={hideAddedAt}
          />
      ))}
    </SectionWrapper>
  );
};

export default PlaylistTrackList;
