import styled from "styled-components";
import { Link } from 'react-router-dom';

export const StyledSidebar = styled.nav`
  display: flex;
  flex-direction: column;
  width: 200px;
  background-color: black;
  height: 100%;
  padding: 24px 10px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex: 40px;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;

  & img {
    width: 100%;
  }
`;

export const Nav = styled.ul`
  margin: 20px 0;
  flex: 1;
`;

export const StyledNavItem = styled.li`
  border-radius: 5px;

  &:hover {
    background-color: var(--bg-hover);
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  color: white;
  text-decoration: none;
`;

export const NavItemWrapper = styled.div`
  margin-right: 20px;

  & p {
    margin: 0;
    font-size: .87em;
    font-weight: 600;
  }
`;

export const UserPlaylistsWrapper = styled.div`
  overflow: scroll;
`;
