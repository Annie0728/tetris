import React, { useState } from "react";
import HoldBox from "./HoldBox";
import PieceBox from "./PieceBox";
import Rules from "./Rules";
import Wacky from "./Wacky";
import Tetris from "./Tetris";
import { Typography, Box, Grid, Stack, Button, Tooltip } from '@mui/material';
import RuleIcon from '@mui/icons-material/Rule';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { useGameOver } from "../Hooks/useGameOver";
import { useBoard } from "../Hooks/useBoard";
import { usePlayer } from "../Hooks/usePlayer";
import { useStats } from "../Hooks/useStats";
import { useWacky } from "../Hooks/useWacky";

function Board(props) {
  const rows = 20;
  const columns = 10;

  const [wacky, setWacky, resetWacky] = useWacky();
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [board, setBoard] = useBoard(rows, columns);
  //const [player, setPlayer, resetPlayer] = usePlayer(wacky);
  const [stats, addLinesMade] = useStats();

  const startGame = () => {
    resetGameOver();
  };

  const handleWacky = (event) => {
    setWacky(event.target.checked);
  };

  const [openRules, setOpenRules] = useState(false);
  const handleOpenRules = () => {
    setOpenRules(true);
  };
  const handleCloseRules = () => {
    setOpenRules(false);
  };

  return (
    <div className="Board">
      <Grid container spacing={2}>
        <Grid item>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <Typography variant="h6" gutterBottom>Mode: {wacky ? "Wacky" : "Normal"}</Typography>
            {!gameOver ? 
              <HoldBox wacky={wacky} />
                : 
              <Box 
                height = '20vh'
                width = '20vh'
                gap={4}
                p={2}
              />
            }
          </Stack>
        </Grid>
        <Grid item>
          <Box 
            height = '80vh'
            width = '40vh'
            gap={4}
            direction="column"
            sx={{ 
              border: '3px solid white',
              bgcolor: 'board_background.main'
            }}
          >
            {gameOver ? (
              <Box
                height = '100%'
                width = '100%'
                display="flex" 
                alignItems="center" 
                justifyContent="center"
              >
                <Stack spacing={5} alignItems="center">
                  <Button 
                    variant="contained" 
                    size="large" 
                    endIcon={<PlayCircleFilledWhiteIcon />} 
                    onClick={startGame}
                  >
                    Start New Game
                  </Button>
                  <Wacky wacky={wacky} handleWacky={handleWacky} />
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
                    <Button 
                      variant="contained" 
                      size="large" 
                      endIcon={<RuleIcon />} 
                      onClick={() => handleOpenRules()}
                      sx={{ width: '120px'}}
                    >
                      Rules
                    </Button>
                  </Tooltip>
                </Stack>
              </Box>
            ) : (
              <Tetris rows={rows} columns={columns} wacky={wacky} board={board} />
            )}
          </Box>
        </Grid>
        <Grid item>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            {!gameOver ? 
              <div>
                <Typography variant="h6" gutterBottom>Score: {stats.score}</Typography>
                <PieceBox />
              </div>
                : 
              <Box 
                height = '20vh'
                width = '20vh'
                gap={4}
                p={2}
              />
            }
          </Stack>
        </Grid>
      </Grid>
      <Rules openRules={openRules} handleCloseRules={handleCloseRules} />
    </div>
  );
}
    
export default Board;