import React, { useContext } from 'react';
import { SectionWrapper } from 'globalStyles';
import ClockIcon from 'assets/Icons/ClockIcon';
import {
  TopGuide,
  TrackNumber,
  TrackInfo,
  TrackAlbum,
  TrackAddedAt,
  TrackDuration,
} from './style';
import { UriContext } from 'context/UriContext';
import { useMediaQuery } from 'hooks/useMediaQuery';
import PlaylistTrackItem from './PlaylistTrackItem';

const PlaylistTrackList = ({ trackItems }) => {
  const { setTrackUri } = useContext(UriContext);
  const handleItemClick = newUri => setTrackUri(newUri);
  const hideAddedAt = useMediaQuery('(min-width: 950px)');

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
        {hideAddedAt &&
          <TrackAddedAt>
            <p>ADDED AT</p>
          </TrackAddedAt>
        }
        <TrackDuration>
          <ClockIcon />
        </TrackDuration>
      </TopGuide>

      {trackItems.map((item, i) => (
        <PlaylistTrackItem
          onItemClick={handleItemClick}
          key={item.track.id}
          item={item}
          index={i}
          hideAddedAt={hideAddedAt}
        />
      ))}
    </SectionWrapper>
  );
};

export default PlaylistTrackList;
