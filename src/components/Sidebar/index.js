import React from 'react';
import UserPlaylists from './UserPlaylists';
import logo from 'assets/images/white-logo.png';
import HomeIcon from 'assets/Icons/HomeIcon';
import SearchIcon from 'assets/Icons/SearchIcon';
import LibraryIcon from 'assets/Icons/LibraryIcon';
import { Link } from 'react-router-dom';
import {
  StyledSidebar,
  Nav,
  StyledNavItem,
  NavItemWrapper,
  StyledLink,
  LogoWrapper,
  UserPlaylistsWrapper
} from './style';

const NavItem = ({Icon, to, text}) => (
  <StyledNavItem>
    <StyledLink to={to}>
      <NavItemWrapper>
        <Icon />
      </NavItemWrapper>
      <NavItemWrapper>
        <p>{text}</p>
      </NavItemWrapper>
    </StyledLink>
  </StyledNavItem>
);

const Sidebar = ({ token }) => {
  return (
    <StyledSidebar>
      <LogoWrapper>
        <Link to="/">
          <img src={logo} alt="Nico Music Logo" />
        </Link>
      </LogoWrapper>
      <Nav>
        <NavItem Icon={HomeIcon} to="/" text="Home" />
        <NavItem Icon={SearchIcon} to="/search" text="Search" />
        <NavItem Icon={LibraryIcon} to="/library/playlists" text="Library" />
      </Nav>
      <UserPlaylistsWrapper>
        <UserPlaylists token={token} />
      </UserPlaylistsWrapper>
    </StyledSidebar>
  );
};

export default Sidebar;