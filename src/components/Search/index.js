import { useState, useEffect, useContext } from 'react';
import SearchListItem from './SearchListItem';
import { spotifySearch } from 'services/spotifyApi/endpoints';
import { Container, InputField, SearchList } from './style';
import { UriContext } from 'context/UriContext';

const Search = ({ token }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trackList, setTrackList] = useState([]);
  const { setTrackUri } = useContext(UriContext);
  const handleItemClick = newUri => setTrackUri(newUri);

  useEffect(() => {
    if (searchTerm) {
      spotifySearch(searchTerm, token)
        .then(res => {
          setTrackList(res.data.tracks.items);
        });
    } else {
      setTrackList([]);
    }
  }, [searchTerm, token]);

  return (
    <Container>
      <InputField
        type="text"
        placeholder="Search your favorite track"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      ></InputField>

      <SearchList>
        {trackList.map(track => 
          <SearchListItem 
            key={track.id} 
            track={track} 
            onItemClick={handleItemClick} 
          />
        )}
      </SearchList>
    </Container>
  );
};

export default Search;
