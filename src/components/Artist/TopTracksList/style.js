import styled from 'styled-components';

export const StyledTrackItem = styled.div`
  display: flex;
  align-items: center;
  color: #b3b3b3;
  padding: 0 16px;
  margin: 0;
  border-bottom: 0;
  border-radius: 5px;
  height: 56px;
  font-size: .87em;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(255,255,255,.1);
  }
`; 

export const TrackNumber = styled.div`
  flex: 1em 1em;
  margin-right: 16px;
  min-width: 12px;
  width: auto;
  text-align: right;
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

export const TrackTitle = styled.div`
  flex: 1;
`;

export const TrackDuration = styled.div`
  flex: 1em 1em;
`;

export const MusicTitle = styled.p`
  font-size: 1em;
  color: white;

  &.playing {
    color: var(--main-red);
  }
`;