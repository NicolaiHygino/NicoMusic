import React, { useContext } from 'react';
import BarsAnim from 'components/BarsAnim';
import { playResume } from 'services/spotifyApi/endpoints';
import { UriContext } from 'context/UriContext';
import { smallerImg } from 'utils/smallerImg';
import { msToMinsAndSecs } from 'utils/msConverter';
import { useMediaQuery } from 'hooks/useMediaQuery';
import {
  TrackNumber,
  ImageWrapper,
  TrackTitle,
  TrackDuration,
  StyledTrackItem,
  MusicTitle,
} from './style';

const TopTrackItem = ({
  track,
  index,
  nowPlaying,
  isPaused,
  isMobile,
  onItemClick,
}) => {
  const duration = msToMinsAndSecs(track.duration_ms);
  const playingClass = nowPlaying === track.uri ? 'playing' : '';
  const imgUrl = smallerImg(track.album.images).url;
  return (
    <StyledTrackItem onClick={() => onItemClick(track.uri)}>
      {!isMobile && (
        <TrackNumber>
          {nowPlaying === track.uri
            ? <BarsAnim isPaused={isPaused} />
            : <p>{index + 1}</p>
          }
        </TrackNumber>
      )}
      <ImageWrapper>
        <img src={imgUrl} alt={track.album.name} />
      </ImageWrapper>
      <TrackTitle>
        <MusicTitle className={playingClass}>{track.name}</MusicTitle>
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

const TopTrackList = ({ token, tracks }) => {
  const {
    deviceId,
    setContextUri,
    isPaused,
    trackUri,
    setTrackUri
  } = useContext(UriContext);

  const handleItemClick = (trackUri) => {
    setContextUri(trackUri);
    setTrackUri(trackUri);
    playResume(token, deviceId, [trackUri]);
  };

  const isMobile = useMediaQuery('(max-width: 600px)');

  return (
    <>
      {tracks.map((track, i) => (
        <TopTrackItem
          key={track.id}
          index={i}
          track={track}
          nowPlaying={trackUri}
          isPaused={isPaused}
          isMobile={isMobile}
          onItemClick={handleItemClick}
        />
      ))}
    </>
  );
};

export default TopTrackList;
