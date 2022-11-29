import { pxToRem } from './utils/pxToRem';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        // primary: {
            // main: '#F26B3A',
        // },
        // secondary: {
        //     main: green[500],
        // },
    },
    typography: {
        fontFamily: [
            'Roboto',
            'sans-serif'
        ].join(','),
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                '@global': {
                    'html': {
                        boxSizing: 'border-box',
                        width: '100%',
                        height: '100%'
                    },
                    'html, body': {
                        outline: 'none',
                    },
                    'body': {
                        margin: '0 auto',
                    },
                    '#root': {
                        minHeight: '100%',
                        height: '100vh',
                        width: '100%',
                    },
                    ':focus': {
                        outline: 'none'
                    },
                    a: {
                        textDecoration: 'none !important',
                    },
                },
            },
        },
    },
});

export default theme;
