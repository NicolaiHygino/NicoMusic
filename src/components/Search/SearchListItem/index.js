import { 
  ListItem, 
  ImgWrapper, 
  TitleWrapper,
  Title,
  SecondaryText,
  Wrapper, 
} from "./style";
import { msToMinsAndSecs } from "utils/msToMinsAndSecs";
import { useMediaQuery } from "hooks/useMediaQuery";

const SearchListItem = ({ track, onItemClick }) => {
  const isMobile = useMediaQuery('(max-width: 550px)');
  const duration = isMobile ? null : msToMinsAndSecs(track.duration_ms) ;

  return (
    <ListItem role="button" onClick={() => onItemClick(track.uri)}>
      <ImgWrapper>
        <img src={track.album.images[2].url} alt="" />
      </ImgWrapper>
      <TitleWrapper>
        <Title>{track.name}</Title>
        <SecondaryText>{track.artists[0].name}</SecondaryText>
      </TitleWrapper>
      <Wrapper>
        {isMobile ? null : <SecondaryText>{duration}</SecondaryText>}
      </Wrapper>
    </ListItem>
  );
};

export default SearchListItem;