import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-red: #EA2027;
    --bg-color: #141414;
    --bg-hover: #272727;
    --track-bg: #535353;
    --scd-track: #b3b3b3;
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

  a {
    color: #fff;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
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

export const LoadingSpinner = styled.div`
  border: 5px solid var(--track-bg);
  border-top: 5px solid var(--main-red);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
