import { useState, useEffect } from 'react';
import styled from "styled-components";
import SearchListItem from './SearchListItem';
import { spotifySearch } from 'services/spotifyApi/endpoints';


const Container = styled.section`
  padding: 10px;
  height: calc(100vh - 52px);
`;

const InputField = styled.input`
  width: 500px;
  color: black;
  border: 0;
  border-radius: 30px;
  padding: .8em 1em;
`;

const SearchList = styled.ul`
  padding: 10px;
`;

const Search = ({ token, onUriChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trackList, setTrackList] = useState([]);

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
            onUriChange={onUriChange} 
          />
        )}
      </SearchList>
    </Container>
  );
};

export default Search;
