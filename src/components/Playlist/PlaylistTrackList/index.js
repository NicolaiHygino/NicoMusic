import React, { useContext } from 'react';
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
import { UriContext } from 'context/UriContext';
import { Link } from 'react-router-dom';

const PlaylistTrackItem = ({ item, index, onItemClick }) => {
  const duration = msToMinsAndSecs(item.track.duration_ms);
  const date = new Date(item.added_at);

  const day = date.getDate();
  const month = date.toLocaleString('en', { month: 'long' });
  const year = date.getFullYear();

  const id = item.track.album.uri.split(':')[2];
  const url = `/album/${id}`;

  return (
    <StyledTrackItem onClick={() => onItemClick(item.track.uri)}>
      <TrackNumber role="cell">
        <p>{index}</p>
      </TrackNumber>
      <TrackTitle role="cell">
        <MusicTitle>{item.track.name}</MusicTitle>
        <p>{item.track.artists[0].name}</p>
      </TrackTitle>
      <TrackAlbum role="cell">
        <div onClick={e => e.stopPropagation()}>
          <Link to={url}>
            <p>{item.track.album.name}</p>
          </Link>
        </div>
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
        <PlaylistTrackItem
          onItemClick={handleItemClick}
          key={item.track.id}
          item={item}
          index={i}
        />
      ))}
    </SectionWrapper>
  );
};

export default PlaylistTrackList;
