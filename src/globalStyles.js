import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-red: #EA2027;
    --bg-color: #141414;
    --bg-hover: #272727;
  }

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
`
export const CenterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const SectionWrapper = styled.div`
  padding: 0 32px;
`;
