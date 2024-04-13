import React, { useState } from "react";
import './App.css';
import Board from "./Components/Board";
import PieceBox from "./Components/PieceBox";
import Rules from "./Components/Rules";
import { Typography, Box, Grid, Stack, Button, Tooltip } from '@mui/material';
import RuleIcon from '@mui/icons-material/Rule';
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="h4" gutterBottom>TETRIS</Typography>
        <Box pt={3}>
          <Grid container spacing={2}>
            <Grid item>
              <Box width = '20vh' />
            </Grid>
            <Grid item>
              <Board score={score} setScore={setScore} />
            </Grid>
            <Grid item>
              <Stack spacing={2} justifyContent="center" alignItems="center">
                <Typography variant="h6" gutterBottom>Score: {score}</Typography>
                <PieceBox />
                <Tooltip title="How to play Tetris" arrow componentsProps=
                  {{
                    tooltip: {
                      sx: {
                        bgcolor: 'primary.hover',
                        '& .MuiTooltip-arrow': {
                          color: 'primary.hover',
                        },
                      },
                    },
                  }}
                >
                  <Button variant="contained" size="large" endIcon={<RuleIcon />} onClick={() => handleOpen()}>Rules</Button>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>
          <Rules open={open} handleClose={handleClose} />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
