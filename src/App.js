import React from "react";
import './App.css';
import Board from "./Components/Board";
import { Box } from '@mui/material';
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
        <Box width="100%" height="100%" justifyContent="center" alignItems="center">
          <Board />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
