import React from 'react';
import HomeIcon from 'assets/Icons/HomeIcon';
import ActiveHomeIcon from 'assets/Icons/ActiveHomeIcon';
import ActiveSearchIcon from 'assets/Icons/ActiveSearchIcon';
import ActiveLibraryIcon from 'assets/Icons/ActiveLibraryIcon';
import SearchIcon from 'assets/Icons/SearchIcon';
import LibraryIcon from 'assets/Icons/LibraryIcon';
import { StyledBar, Button } from './style';
import { NavLink } from 'react-router-dom';

const MobileNavBar = () => {
  return (
    <StyledBar>
      <NavLink exact to="/" activeClassName="selected">
        <Button>
          <HomeIcon />
          <ActiveHomeIcon />
          Home
        </Button>
      </NavLink>
      <NavLink to="/search" activeClassName="selected">
        <Button>
          <SearchIcon />
          <ActiveSearchIcon />
          Search
        </Button>  
      </NavLink>
      <NavLink to="/library/playlists" activeClassName="selected">
        <Button>
          <LibraryIcon />
          <ActiveLibraryIcon />
          Library
        </Button>  
      </NavLink>
    </StyledBar>
  );
};

export default MobileNavBar;