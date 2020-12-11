import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(',')
    },
    palette: {
        primary: {
            main: '#1da1f2',
            contrastText: "#fff",
            dark: "#1da1f2",
        },

    }
});