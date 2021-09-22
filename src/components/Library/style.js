import styled from 'styled-components';

export const LibraryNav = styled.nav`
  position: absolute;
  top: 10px;
  left: 328px;

  @media screen and (max-width: 1000px) {
    left: 280px;
  }

  @media screen and (max-width: 900px) {
    left: 264px;
  }
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  & a {
    font-size: .87em;
    font-weight: 600;
    border-radius: 4px;
    display: inline-block;
    padding: .9em 1em;
    position: relative;
    text-decoration: none;
    margin-right: 8px;
  }

  & a.selectedNav {
    background-color: #333;
  }
`;
