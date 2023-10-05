import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: [
      'Roboto',
      'Segoe UI',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
