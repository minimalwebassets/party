import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  typography: {
    fontFamily: '"Actor", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    type: 'dark',
    divider: 'rgba(255, 255, 255, 1)',
    primary: {
      main: '#514E5D',
    },
    secondary: {
      main: '#CBCE91',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#514E5D',
      paper: 'rgba(255, 255, 255, 0.2)',
    },
  },
});

export default theme;
