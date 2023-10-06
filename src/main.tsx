import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import App from './components/App/App';
import Toaster from './components/Toaster/Toaster';

const container = document.querySelector('#root');
const shadowContainer = container?.attachShadow({ mode: 'open' });
const emotionRoot = document.createElement('style');
const shadowRootElement = document.createElement('div');
shadowContainer?.appendChild(emotionRoot);
shadowContainer?.appendChild(shadowRootElement);

const cache = createCache({
  key: 'css',
  prepend: true,
  container: emotionRoot,
});

const shadowTheme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    MuiPopover: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
    MuiPopper: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
    MuiModal: {
      defaultProps: {
        container: shadowRootElement,
      },
    },
  },
});

// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
ReactDOM.createRoot(shadowRootElement).render(
  <React.StrictMode>
    <CacheProvider value={cache}>
      <ThemeProvider theme={shadowTheme}>
        <CssBaseline />
        <Toaster />
        <App />
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>,
);
