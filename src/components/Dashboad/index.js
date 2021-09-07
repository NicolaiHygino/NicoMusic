import React, { useState } from 'react';
import Search from 'components/Search';
import Player from 'components/Player';
import logo from 'assets/images/white-logo.png';
import HomeIcon from 'assets/Icons/HomeIcon';
import SearchIcon from 'assets/Icons/SearchIcon';
import LibraryIcon from 'assets/Icons/LibraryIcon';
import {
  DashboardDiv,
  Nav,
  NavUl,
  NavItem,
  NavItemWrapper,
  StyledLink,
  Content,
  LogoWrapper,
} from './style';

const Dashboard = ({ token }) => {
  const [trackUri, setTrackUri] = useState([]);

  const handleUriChange = newUri =>
    setTrackUri(newUri);

  return (<>
    <DashboardDiv>
      <Nav>
        <LogoWrapper>
          <img src={logo} alt="Nico Music Logo" />
        </LogoWrapper>
        <NavUl>
          <NavItem>
            <StyledLink to="/">
              <NavItemWrapper>
                <HomeIcon />
              </NavItemWrapper>
              <NavItemWrapper>
                <p>Home</p>
              </NavItemWrapper>
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/search">
              <NavItemWrapper>
                <SearchIcon />
              </NavItemWrapper>
              <NavItemWrapper>
                <p>Search</p>
              </NavItemWrapper>
            </StyledLink>
          </NavItem>
          <NavItem>
            <StyledLink to="/library">
              <NavItemWrapper>
                <LibraryIcon />
              </NavItemWrapper>
              <NavItemWrapper>
                <p>Library</p>
              </NavItemWrapper>
            </StyledLink>
          </NavItem>
        </NavUl>
      </Nav>
      <Content>
        <Search 
          token={token} 
          onUriChange={handleUriChange}
        />
      </Content>
    </DashboardDiv>
    <Player token={token} uris={trackUri}/>
  </>);
};

export default Dashboard;