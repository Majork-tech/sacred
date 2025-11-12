import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#D81B60' }, // magenta/pink — soulful vibe
    secondary: { main: '#90caf9' },
    background: { default: '#0f0f10', paper: '#1b1b1d' },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h5: { fontWeight: 600 },
  },
  components: {
    MuiAppBar: { defaultProps: { elevation: 1 } }
  }
});

export default theme;
