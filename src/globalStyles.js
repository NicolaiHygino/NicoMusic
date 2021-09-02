import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --main-red: #EA2027;
    --bg-color: #141414;
    --hover: #272727;
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
`

export { GlobalStyle };