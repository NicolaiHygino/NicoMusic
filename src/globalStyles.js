import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');
  
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