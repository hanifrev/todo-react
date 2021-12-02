import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
      fontFamily: 'Outfit, sans-serif',
    },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
      card: '#e4e4e4',
    },
    error: {
      main: red.A400,
    },
  },
}
);

export default theme;