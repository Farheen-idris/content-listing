import React from 'react';
import Listing from './Pages/Listing'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      default: '#171717',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'Titillium Web, Arial',
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Listing />
    </ThemeProvider>
  );
};

export default App;