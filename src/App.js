import React, { useState } from "react";
import './App.css';
import Board from "./Components/Board";
import PieceBox from "./Components/PieceBox";
import Score from "./Components/Score";
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

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Typography variant="h4" gutterBottom>TETRIS</Typography>
        <Box pt={3}>
          <Grid container spacing={2}>
          <Grid item>
            <Board />
          </Grid>
          <Grid item>
            <Stack spacing={2} justifyContent="center" alignItems="center">
              <Score />
              <PieceBox />
              <Tooltip title="How to play Tetris!" arrow componentsProps={{
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
                <Button variant="contained" size="large" startIcon={<RuleIcon />} onClick={() => handleOpen()}>Rules</Button>
              </Tooltip>
            </Stack>
          </Grid>
          </Grid>
        </Box>
        <Rules open={open} handleClose={handleClose} />
      </ThemeProvider>
    </div>
  );
}

export default App;
