import React from 'react';
import { msToMinsAndSecs } from 'utils/msToMinsAndSecs';
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
  const duration = msToMinsAndSecs(item.track.duration_ms);
  const date = new Date(item.added_at);

  const day = date.getDate();
  const month = date.toLocaleString('en', { month: 'long' });
  const year = date.getFullYear();

  const id = item.track.album.uri.split(':')[2];
  const url = `/album/${id}`;

  const imgUrl = item.track.album.images[2].url;
  const albumName = item.track.album.name;

  return (
    <StyledTrackItem onClick={() => onItemClick(item.track.uri)}>
      <TrackNumber role="cell">
        <p>{index}</p>
      </TrackNumber>
      <TrackInfo role="cell">
        <ImageWrapper>
          <img src={imgUrl} alt={albumName} />
        </ImageWrapper>
        <TitleWrapper>
          <MusicTitle>{item.track.name}</MusicTitle>
          <p>{item.track.artists[0].name}</p>
        </TitleWrapper>
      </TrackInfo>
      <TrackAlbum role="cell">
        <AlbumWrapper onClick={e => e.stopPropagation()}>
          <Link to={url}>
            <p>{item.track.album.name}</p>
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