import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#121212',
      paper: '#1f1f1f',
    },
    text: {
      primary: '#ffffff',
      secondary: '#cccccc',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#121212',
        },
      },
    },
    header: {
      backgroundColor: '#1f1f1f',
      color: '#ffffff',
    },
  },
});

export default darkTheme;