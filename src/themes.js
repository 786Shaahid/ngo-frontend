import { createTheme } from '@mui/material/styles';

export const customTheme = createTheme({
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontFamily: '"Poppons", serif',
      fontWeight: 700,
      color: '#02133E',
    },
    body1: {
      fontWeight: 400,
      color: '#5C7189',
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#02133E',
      contrastText: '#e6f3ff'
    },
    secondary: {
      main: '#0cdb0c',
      contrastText: '#fff'
    },
    error: {
      main: '#bc5d5d',
      contrastText: '#fff'
    },
    text: {
      primary: '#5c7189',
      secondary: '#0073df'
    }
  },

});
