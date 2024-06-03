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
import { useInterval } from "../Hooks/useInterval";
import { actions, actionForKey } from "./Keys";
import { playerController } from "../Util/PlayerHelp";

function Board() {
  const rows = 20; // number of rows in the main tetris board
  const columns = 10; // number of columns in the main tetris board

  // setting up hooks used for the tetris game
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [wacky, setWacky, resetWacky] = useWacky();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [stats, addLinesMade] = useStats();
  const [board] = useBoard(rows, columns, player, resetPlayer, addLinesMade);

  // start tetris game
  const startGame = () => {
    document.getElementById("board-input").focus();
    resetGameOver();
  };

  // handle when user switches on/off the wacky switch
  const handleWacky = (event) => {
    setWacky(event.target.checked);
  };

  // handle opening/closing the rules from the rules button
  const [openRules, setOpenRules] = useState(false);
  const handleOpenRules = () => {
    setOpenRules(true);
  };
  const handleCloseRules = () => {
    setOpenRules(false);
  };

  // autodrop current block
  useInterval(() => {
    handleInput(actions.slow_drop);
  }, 1000);

  // handle key inputs when game has started
  const onKeyDown = (key) => {
    if (!gameOver) {
      const action = actionForKey(key.code);

      if (action === actions.quit) {
        setGameOver(true);
      } else {
        handleInput(action);
      }

      
    }
  };
  const onKeyUp = (key) => {
    if (!gameOver) {
      const action = actionForKey(key.code);

      if (action === actions.quit) {
        setGameOver(true);
      }
    }
  };
  const handleInput = (action) => {
    playerController(action, board, player, setPlayer, setGameOver);
  };

  return (
    <div 
      id="board-input"
      className="Board"
      role="button" 
      tabIndex="0" 
      aria-pressed="true"
      onKeyDown={key => onKeyDown(key)}
      style={{height: 100 + "vh", width: 100 + "vw", overflow: "hidden"}}
    >
      <Grid container spacing={2} justifyContent="center" pt={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>TETRIS</Typography>
        </Grid>
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
              <Tetris rows={rows} columns={columns} board={board} />
            )}
          </Box>
        </Grid>
        <Grid item>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            {!gameOver ? 
              <div>
                <Typography variant="h6" gutterBottom>Score: {stats.score}</Typography>
                <PieceBox minoes={player.minoes} />
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