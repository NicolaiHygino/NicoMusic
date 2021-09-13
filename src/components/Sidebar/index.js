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
import { Link } from 'react-router-dom';

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

const Sidebar = () => {
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
      </Nav>
    </StyledSidebar>
  );
};

export default Sidebar;