import { 
  ListItem, 
  ImgWrapper, 
  TitleWrapper,
  Title,
  SecondaryText,
  Wrapper, 
} from "./style";
import { msToMinsAndSecs } from "utils/msToMinsAndSecs";

const SearchListItem = ({ track, onContextUriChange }) => {
  const duration = msToMinsAndSecs(track.duration_ms);

  return (
    <ListItem role="button" onClick={() => onContextUriChange(track.uri)}>
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