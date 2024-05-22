import React, { useState } from "react";
import Wacky from "./Wacky";
import Tetris from "./Tetris";
import { Box, Stack, Button } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { buildBoard } from "../Util/TetrisHelp";
import { useGameOver } from "../Hooks/useGameOver";
import { usePlayer } from "../Hooks/usePlayer";
import { useBoard } from "../Hooks/useBoard";

function Board(props) {
  const rows = 20;
  const columns = 10;

  const [gameOver, setGameOver, resetGameOver] = useGameOver();
  const [board, setBoard] = useBoard(rows, columns);

  const startGame = () => {
    resetGameOver();
  };

  return (
    <div className="Board">
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
            <Stack spacing={5}>
              <Button variant="contained" size="large" endIcon={<PlayCircleFilledWhiteIcon />} onClick={startGame}>Start New Game</Button>
              <Wacky wacky={props.wacky} handleWacky={props.handleWacky} />
            </Stack>
          </Box>
        ) : (
          <Tetris rows={rows} columns={columns} wacky={props.wacky} board={board} />
        )}
      </Box>
    </div>
  );
}
    
export default Board;