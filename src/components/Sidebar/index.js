import React from 'react';
import {
  StyledSidebar,
  Nav,
  StyledNavItem,
  NavItemWrapper,
  StyledLink,
  LogoWrapper,
} from './style';
import logo from 'assets/images/white-logo.png';
import HomeIcon from 'assets/Icons/HomeIcon';
import SearchIcon from 'assets/Icons/SearchIcon';
import LibraryIcon from 'assets/Icons/LibraryIcon';

const NavItem = ({Icon, to, text}) => {
  return (
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
};

const Sidebar = () => {
  return (
    <StyledSidebar>
      <LogoWrapper>
        <img src={logo} alt="Nico Music Logo" />
      </LogoWrapper>
      <Nav>
        <NavItem Icon={HomeIcon} to="/" text="Home" />
        <NavItem Icon={SearchIcon} to="/search" text="Search" />
        <NavItem Icon={LibraryIcon} to="/library" text="Library" />
      </Nav>
    </StyledSidebar>
  ); 
};

export default Sidebar;