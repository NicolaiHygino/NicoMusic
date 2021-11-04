import { useState, useEffect, useContext } from 'react';
import SearchListItem from './SearchListItem';
import { playResume } from 'services/spotifyApi/endpoints';
import { spotifySearch } from 'services/spotifyApi/endpoints';
import { Container, InputField, SearchList } from './style';
import { UriContext } from 'context/UriContext';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trackList, setTrackList] = useState([]);
  const { deviceId, trackUri, setTrackUri } = useContext(UriContext);
 
  const handleItemClick = trackUri => {
    setTrackUri(trackUri)
    playResume(deviceId, [trackUri]);
  };

  useEffect(() => {
    if (searchTerm) {
      spotifySearch(searchTerm)
        .then(res => {
          setTrackList(res.data.tracks.items);
        });
    } else {
      setTrackList([]);
    }
  }, [searchTerm]);

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
            nowPlaying={trackUri}
            onItemClick={handleItemClick} 
          />
        )}
      </SearchList>
    </Container>
  );
};

export default Search;
