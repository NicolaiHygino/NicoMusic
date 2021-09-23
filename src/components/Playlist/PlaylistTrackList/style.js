import styled from 'styled-components';

export const TopGuide = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  color: #b3b3b3;
  font-size: 14px;
  border-bottom: 1px solid rgba(255,255,255,.1);
  height: 36px;
  margin-bottom: 16px;
`;

export const StyledTrackItem = styled(TopGuide)`
  margin: 0;
  border-bottom: 0;
  border-radius: 5px;
  height: 56px;
  font-size: .87em;
  &:hover {
    background-color: rgba(255,255,255,.1);
  }
`; 

export const TrackNumber = styled.div`
  width: 1em;
  flex: 1em 1em 1em;
  margin-right: 16px;
  width: 24;
  text-align: right;
`;

export const TrackInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 1.5;
  overflow: hidden;
`;

export const TrackAlbum = styled.div`
  flex: 1;
  overflow: hidden;
`;

export const AlbumWrapper = styled.div`
  padding-right: 20px;

  & p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export const TrackAddedAt = styled.div`
  flex: 1;
`;

export const TrackDuration = styled.div`
  display: flex;
  flex: 2em 2em;
  justify-content: flex-end;
  width: 32px;
`;

export const ImageWrapper = styled.div`
  min-width: 40px;
  width: 40px;
  height: 40px;
  margin-right: 16px;
  & img {
    width: 100%;
  }
`; 

export const TitleWrapper = styled.div`
  overflow: hidden;
  padding-right: 30px;
`;

export const MusicTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1em;
  color: white;

  &.playing {
    color: var(--main-red);
  }
`;
