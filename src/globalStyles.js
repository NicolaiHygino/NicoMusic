import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-red: #EA2027;
    --bg-color: #141414;
    --bg-hover: #272727;
    --track-bg: #535353;
    --scd-track: #b3b3b3;
  }

  /* || Resets*/
  * {
    box-sizing: border-box;
  }

  body, html {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 100%;
  }

  body {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    background-color: var(--bg-color);
  }

  ul, h1, h2, h3, h4, h5, h6, p, div {
    padding: 0;
    margin: 0
  }

  ul {
    list-style: none;
  }

  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  /* || End Resets*/

  /* || ScrollBar */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, .3) transparent;
  }
  *::-webkit-scrollbar {
    background-color: transparent;
    width: 8px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(255,255,255, .3);
  }
  /* || End ScrollBar */

  /* || Menu Icon Logic */
  .active {
    display: none;
  }

  .selected .normal {
    display: none;
  }

  .selected .active {
    display: block;
  }
  /* || End Menu Icon Logic */
`;

export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SectionWrapper = styled.div`
  padding: 0 32px;

  @media screen and (max-width: 600px) {
    padding: 10px;
  }
`;

export const SectionHeaderWrapper = styled.div`
  margin-bottom: 16px;
`;

export const SectionHeader = styled.h2`
  font-size: 1.5em;
  font-weight: 700;
`;

export const MainButton = styled.button`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  background-color: var(--main-red);
  border: 0;
  border-radius: 3px;
  padding: .9em 2em;
  cursor: pointer;
`;
