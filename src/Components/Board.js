import React, { useState } from "react";
import Wacky from "./Wacky";
import Tetris from "./Tetris";
import { Box, Stack, Button } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { createGame } from "../Hooks/TetrisHelp";

function Board(props) {
  const [gameOver, setGameOver] = useState(true);
  const startGame = () => {
    setGameOver(false);
  };

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
        {gameOver ? (
          <Stack spacing={5}>
            <Button variant="contained" size="large" endIcon={<PlayCircleFilledWhiteIcon />} onClick={startGame}>Start New Game</Button>
            <Wacky wacky={props.wacky} handleWacky={props.handleWacky} />
          </Stack>
        ) : (
          <Tetris wacky={props.wacky} board={createGame()} />
        )}
      </Box>
    </div>
  );
}
    
export default Board;