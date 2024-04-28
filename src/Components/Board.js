import React, { useState } from "react";
import { useStartGame } from "../Hooks/useStartGame";
import { useTetrisBoard } from "../Hooks/useTetrisBoard";
import Wacky from "./Wacky";
import Tetris from "./Tetris";
import { Box, Stack, Button } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

function Board(props) {
  const [game, setGame, resetGame] = useStartGame();
  const startGame = () => {
    resetGame();
  };

  const rows = 20;
  const columns = 10;
  const [board, setBoard] = useTetrisBoard({rows, columns});

  return (
    <div className="Board">
      <Box 
        height = '80vh'
        width = '40vh'
        gap={4}
        p={2}
        display="flex"
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ 
          borderRadius: '25px',
          border: '3px solid white',
          bgcolor: 'board_background.main'
        }}
      >
        {game ? (
          <Tetris board={board} />
        ) : (
          <Stack spacing={5}>
            <Button variant="contained" size="large" endIcon={<PlayCircleFilledWhiteIcon />} onClick={startGame}>Start New Game</Button>
            <Wacky checked={props.checked} handleWacky={props.handleWacky} />
          </Stack>
        )}
      </Box>
    </div>
  );
}
    
export default Board;