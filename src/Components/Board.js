import React, { useState } from "react";
import HoldBox from "./HoldBox";
import PieceBox from "./PieceBox";
import Menu from "./Menu";
import Rules from "./Rules";
import Tetris from "./Tetris";
import Stats from "./Stats";
import Pause from "./Pause";
import { Typography, Box, Grid, Stack } from '@mui/material';
import { useGameOver } from "../Hooks/useGameOver";
import { useBoard } from "../Hooks/useBoard";
import { usePlayer } from "../Hooks/usePlayer";
import { useStats } from "../Hooks/useStats";
import { useWacky } from "../Hooks/useWacky";
import { useInterval } from "../Hooks/useInterval";
import { useDropTime } from "../Hooks/useDropTime";
import { actions, actionForKey, actionIsDrop } from "./Keys";
import { playerController } from "../Util/PlayerHelp";

// main layout the tetris game

function Board() {
  const rows = 20; // number of rows in the main tetris board
  const columns = 10; // number of columns in the main tetris board

  // setting up hooks used for the tetris game
  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [wacky, setWacky] = useWacky();
  const [player, setPlayer, resetPlayer, newPlayer] = usePlayer(wacky);
  const [stats, resetStats, addLinesMade] = useStats();
  const [board, resetBoard] = useBoard(rows, columns, player, resetPlayer, addLinesMade);
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime(stats);
  const [paused, setPaused] = useState(false);

  // start tetris game
  const startGame = () => {
    document.getElementById("board-input").focus();
    setPaused(false);
    resetBoard();
    newPlayer(wacky);
    resetStats();
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

  // handle opening/closing the pause backdrop when user pauses the game
  const handleOpenPause = () => {
    setPaused(true);
  }
  const handleClosePause = () => {
    setPaused(false);
  };

  // autodrop current block
  useInterval(() => {
    handleInput(actions.slow_drop);
  }, dropTime);

  // handle key inputs when game has started
  const onKeyDown = (key) => {
    if (!gameOver) {
      const action = actionForKey(key.code);

      if (action === actions.quit) {
        if (!dropTime) {
          handleClosePause();
          resumeDropTime();
        }
        setGameOver(true);
      } else if (action === actions.pause) {
        if (dropTime) {
          handleOpenPause();
          pauseDropTime();
        } else {
          handleClosePause();
          resumeDropTime();
        }
      } else {
        if (actionIsDrop(action)) {
          pauseDropTime();
        } 
        if (!dropTime) {
          return;
        }
        handleInput(action);
      }
    }
  };
  const onKeyUp = (key) => {
    if (!gameOver && !paused) {
      const action = actionForKey(key.code);

      if (actionIsDrop(action)) {
        resumeDropTime();
      }
    }
  };
  const handleInput = (action) => {
    playerController(action, wacky, board, player, setPlayer, setGameOver);
  };

  return (
    <div 
      id="board-input"
      className="Board"
      role="button" 
      tabIndex="0" 
      aria-pressed="true"
      onKeyDown={key => onKeyDown(key)}
      onKeyUp={key => onKeyUp(key)}
      style={{height: 100 + "vh", width: 100 + "vw", overflow: "hidden"}}
    >
      <Grid container spacing={2} justifyContent="center" pt={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>TETRIS</Typography>
        </Grid>
        <Grid item>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            {!gameOver ? 
              <HoldBox wacky={wacky} mino={player.holdMino} />
                : 
              <Box height='20vh' width='20vh' gap={4} p={2} />
            }
            <Typography variant="h6" gutterBottom>Mode: {wacky ? "Wacky" : "Normal"}</Typography>
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
              <Menu 
                wacky={wacky} 
                handleWacky={handleWacky} 
                startGame={startGame} 
                handleOpenRules={handleOpenRules} 
              />
            ) : (
              <Tetris rows={rows} columns={columns} board={board} />
            )}
          </Box>
        </Grid>
        <Grid item>
          <Stack spacing={2} justifyContent="center" alignItems="center">
            {!gameOver ? 
              <Stack>
                <PieceBox minoes={player.minoes} />
                <Stats stats={stats} />
              </Stack>
                : 
              <Box height='20vh' width='20vh' gap={4} p={2} />
            }
          </Stack>
        </Grid>
      </Grid>
      <Rules openRules={openRules} handleCloseRules={handleCloseRules} />
      <Pause paused={paused} />
    </div>
  );
}
    
export default Board;