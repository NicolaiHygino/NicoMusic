import React, { useState, useEffect } from 'react';
import Loading from 'components/Loading';
import TopTrackList from './TopTracksList';
import SectionHeader from 'components/SectionHeader';
import GridItemsContainer from 'components/GridItemsContainer';
import { useParams } from 'react-router-dom';
import { getArtist, getArtistAlbums, getArtistTopTracks, getMultipleAlbums } from 'services/spotifyApi/endpoints';
import { numberWithDot } from 'utils/numberWithDot';
import {
  Banner,
  ArtistName,
  Followers,
  Row
} from './style';
import { SectionWrapper } from 'globalStyles';

const artistAlbumFilter = (albums) => {
  return albums.data.albums
    .filter(album => album.available_markets.includes('BR'))
    .reduce((filtered, current) => {
      return filtered.every(i => i.name.toLowerCase() !== current.name.toLowerCase())
        ? [...filtered, current]
        : filtered;
    }, []);
};

const Artist = ({ token }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [artist, setArtist] = useState(null);
  const [topTracks, setTopTracks] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [singles, setSingles] = useState(null);
  const [appearsOn, setAppearsOn] = useState(null);
  const [compilations, setCompilations] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    const fetchArtist = async () => {
      const artist = await getArtist(token, id);
      const topTracks = await getArtistTopTracks(token, id);
      const artistAlbums = await getArtistAlbums(token, id, 'album');
      const artistSingles = await getArtistAlbums(token, id, 'single');
      const appearsOn = await getArtistAlbums(token, id, 'appears_on', 5);
      const compilation = await getArtistAlbums(token, id, 'compilation', 5);

      const albumIds = artistAlbums.data.items
        .map(album => album.id).join(',');
     
      const singleIds = artistSingles.data.items
        .map(album => album.id).join(',');

      const albums = await getMultipleAlbums(token, albumIds);
      const filteredAlbums = artistAlbumFilter(albums).slice(0, 5);
      
      const singles = await getMultipleAlbums(token, singleIds);
      const filteredSingles = artistAlbumFilter(singles).slice(0, 5);

      setArtist(artist.data);
      setTopTracks(topTracks.data);
      setAlbums(filteredAlbums);
      setSingles(filteredSingles);
      setAppearsOn(appearsOn.data.items);
      setCompilations(compilation.data.items);
      setIsLoading(false);
    }
    fetchArtist();
  }, [id, token]);

  if (isLoading) return <Loading />;
  return (
    <>
      <Banner>
        <SectionWrapper>
          <ArtistName>
            {artist.name}
          </ArtistName>
          <Followers>
            {numberWithDot(artist.followers.total)} followers
          </Followers>
        </SectionWrapper>
      </Banner>

      <SectionWrapper>
        <Row>
          <SectionHeader>Popular</SectionHeader>
          <TopTrackList token={token} tracks={topTracks.tracks} />
        </Row>
        {albums.length > 0 &&
          <Row>
            <SectionHeader>Albums</SectionHeader>
            <GridItemsContainer itemsArray={albums} />
          </Row> }
        {singles.length > 0 && 
          <Row>
            <SectionHeader>Singles</SectionHeader>
            <GridItemsContainer itemsArray={singles} />
          </Row> }
        {appearsOn.length > 0 &&
          <Row>
            <SectionHeader>Appears On</SectionHeader>
            <GridItemsContainer itemsArray={appearsOn} />
          </Row> }
        {compilations.length > 0 &&
          <Row>   
            <SectionHeader>Compilations</SectionHeader>
            <GridItemsContainer itemsArray={compilations} />
          </Row> }
      </SectionWrapper>
    </>
  );
};

export default Artist;
