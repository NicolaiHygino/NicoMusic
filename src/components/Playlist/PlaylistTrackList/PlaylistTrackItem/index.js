import React from 'react';
import { msToMinsAndSecs } from 'utils/msConverter';
import { smallerImg } from 'utils/smallerImg';
import { Link } from 'react-router-dom';
import {
  TrackNumber,
  TrackInfo,
  TrackAlbum,
  TrackAddedAt,
  TrackDuration,
  StyledTrackItem,
  MusicTitle,
  TitleWrapper,
  ImageWrapper,
  AlbumWrapper
} from '../style';

const PlaylistTrackItem = ({ item, index, onItemClick, hideAddedAt}) => {
  const track = item.track;
  const album = item.track.album;

  const duration = msToMinsAndSecs(track.duration_ms);

  const date = new Date(item.added_at);
  const day = date.getDate();
  const month = date.toLocaleString('en', { month: 'long' });
  const year = date.getFullYear();

  const albumUrl = `/album/${album.id}`;

  const imgUrl = smallerImg(album.images)?.url;

  return (
    <StyledTrackItem onClick={() => onItemClick(track.uri)}>
      <TrackNumber role="cell">
        <p>{index + 1}</p>
      </TrackNumber>
      <TrackInfo role="cell">
        <ImageWrapper>
          <img src={imgUrl} alt={album.name} />
        </ImageWrapper>
        <TitleWrapper>
          <MusicTitle>{track.name}</MusicTitle>
          <p>{track.artists[0].name}</p>
        </TitleWrapper>
      </TrackInfo>
      <TrackAlbum role="cell">
        <AlbumWrapper onClick={e => e.stopPropagation()}>
          <Link to={albumUrl}>
            <p>{album.name}</p>
          </Link>
        </AlbumWrapper>
      </TrackAlbum>
      {hideAddedAt && 
        <TrackAddedAt role="cell">
          <p>{`${day} ${month} ${year}`}</p>
        </TrackAddedAt>
      }
      <TrackDuration role="cell">
        <p>{duration}</p>
      </TrackDuration>
    </StyledTrackItem>
  );
};

export default PlaylistTrackItem;