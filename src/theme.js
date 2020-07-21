import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
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
    },
  },
});

export default theme;
