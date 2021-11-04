import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ProvideAuth } from 'context/Auth';
import { GlobalStyle } from './globalStyles';

ReactDOM.render(
  <BrowserRouter>
    <ProvideAuth>
      <GlobalStyle />
      <App />
    </ProvideAuth>
  </BrowserRouter>,
  document.getElementById('root')
);
