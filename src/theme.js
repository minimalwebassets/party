import { createMuiTheme } from '@material-ui/core/styles';
import { red, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: red.A400,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
