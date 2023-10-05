import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider, createTheme, ThemeProvider } from '@mui/material/styles';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

// import theme from './theme';
import App from './components/App/App';

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          // backgroundColor: 'rgba(0,0,0,0.6)',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        // '@global': {
        //   html: {
        //     boxSizing: 'border-box',
        //     width: '100%',
        //     height: '100%',
        //   },
        //   'html, body': {
        //     outline: 'none',
        //   },
        //   body: {
        //     margin: '0 auto',
        //   },
        //   '#root': {
        //     minHeight: '100%',
        //     height: '100vh',
        //     width: '100%',
        //   },
        //   ':focus': {
        //     outline: 'none',
        //   },
        //   a: {
        //     textDecoration: 'none !important',
        //   },
        // },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // ReactDOM.createRoot(shadowRootElement).render(
  <React.StrictMode>
    {/* <CacheProvider value={cache}> */}
    <ThemeProvider theme={theme}>
      <ScopedCssBaseline>
        <CssBaseline />
        <App />
      </ScopedCssBaseline>
    </ThemeProvider>
    {/* </CacheProvider> */}
  </React.StrictMode>,
);
