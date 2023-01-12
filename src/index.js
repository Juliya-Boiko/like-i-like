import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'style/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from "react-router-dom";
import { App } from 'App';
import { theme } from 'style/theme';
import './i18next';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/like-i-like">
        <App />    
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
