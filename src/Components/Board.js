import React, { useState } from "react";
import Wacky from "./Wacky";
import { Box, Stack, Button, Typography, Switch } from '@mui/material';
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

  const [checked, setChecked] = useState(false);
  const handleWacky = (event) => {
    setChecked(event.target.checked);
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
        <Stack spacing={5}>
          <Button variant="contained" size="large" endIcon={<PlayCircleFilledWhiteIcon />}>Start New Game</Button>
          <Wacky checked={checked} handleWacky={handleWacky} />
        </Stack>
      </Box>
    </div>
  );
}
    
export default Board;