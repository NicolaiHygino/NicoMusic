import { 
  ListItem, 
  ImgWrapper, 
  TitleWrapper,
  Title,
  SecondaryText,
  Wrapper, 
} from "./style";

const msToMinsAndSecs = ms => {
  const mins = Math.floor(ms / 60000);
  const secs = ((ms % 60000) / 1000).toFixed(0);

  return `${mins}:${(secs < 10 ? '0' : '')}${secs}`;
};

const SearchListItem = ({ track, onUriChange }) => {
  const duration = msToMinsAndSecs(track.duration_ms);

  return (
    <ListItem role="button" onClick={() => onUriChange(track.uri)}>
      <ImgWrapper>
        <img src={track.album.images[2].url} alt="" />
      </ImgWrapper>
      <TitleWrapper>
        <Title>{track.name}</Title>
        <SecondaryText>{track.artists[0].name}</SecondaryText>
      </TitleWrapper>
      <Wrapper>
        <SecondaryText>
          {duration}
        </SecondaryText>
      </Wrapper>
    </ListItem>
  );
};

export default SearchListItem;