import React, { useState } from "react";
import { Box, Button } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';

function Board(props) {
  const [game, setGame] = useState(false);
  const handleStartGame = () => {
    setGame(true);
    props.setScore(0);
  };
  const handleEndGame = () => {
    setGame(false);
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
        <Button variant="contained" size="large" endIcon={<PlayCircleFilledWhiteIcon />}>Start New Game</Button>
      </Box>
    </div>
  );
}
    
export default Board;