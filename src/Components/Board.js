import React, { useState } from "react";
import { useStartGame } from "../Hooks/useStartGame";
import Wacky from "./Wacky";
import Tetris from "./Tetris";
import { Box, Stack, Button } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

function Board(props) {
  const [game, setGame, resetGame] = useStartGame();

  const [checked, setChecked] = useState(false);
  const handleWacky = (event) => {
    setChecked(event.target.checked);
  };

  const startGame = () => {
    resetGame();
  };

  return (
    <div className="Board">
      <Box 
        height = '70vh'
        width = '500px'
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
          <Tetris />
        ) : (
          <Stack spacing={5}>
            <Button variant="contained" size="large" endIcon={<PlayCircleFilledWhiteIcon />} onClick={startGame}>Start New Game</Button>
            <Wacky checked={checked} handleWacky={handleWacky} />
          </Stack>
        )}
      </Box>
    </div>
  );
}
    
export default Board;