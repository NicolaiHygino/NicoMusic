import React from 'react';
import LibPlaylists from './LibPlaylists';
import LibArtists from './LibArtists';
import LibAlbums from './LibAlbums';
import { Switch, Route, NavLink, useRouteMatch } from 'react-router-dom';
import { SectionWrapper } from 'globalStyles';
import {
  LibraryNav,
  NavList,
  NavItem
} from './style';

const Library = ({ token }) => {
  let { path, url } = useRouteMatch();

  return (
    <SectionWrapper>
      <LibraryNav>
        <NavList>
          <NavItem>
            <NavLink to={`${url}/playlists`} activeClassName="selectedNav">
              Playlists
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`${url}/artists`} activeClassName="selectedNav">
              Artists
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to={`${url}/albums`} activeClassName="selectedNav">
              Albums
            </NavLink>
          </NavItem>
        </NavList>
      </LibraryNav>

      <Switch>
        <Route path={`${path}/playlists`}>
          <LibPlaylists token={token} />
        </Route>
        <Route path={`${path}/artists`}>
          <LibArtists token={token} />
        </Route>
        <Route path={`${path}/albums`}>
          <LibAlbums token={token} />
        </Route>
      </Switch>
    </SectionWrapper>
  );
};

export default Library;