import React, { useState } from "react";
import './App.css';
import Board from "./Components/Board";
import { Typography, Box } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8A84E2',
      hover: '#59588B',
      light: '#C5C2F1'
    },
    secondary: {
      main: '#44CFCB',
    },
    tertiary: {
      main: '#FFEAEE',
    },
    background: {
      main: '#282C34',
    },
    board_background: {
      main: '#32363D',
    } 
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="h4" gutterBottom>TETRIS</Typography>
        <Box pt={3}>
          <Board />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
