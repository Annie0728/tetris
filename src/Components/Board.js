import React, { useState } from "react";
import { Box, Button } from '@mui/material';

function Board() {
  return (
    <div className="Board">
      <Box 
        height = '70vh'
        width = '500px'
        gap={4}
        p={2}
        sx={{ 
          borderRadius: '25px',
          border: '3px solid white',
          bgcolor: 'board_background.main'
        }}
      >
        <Button variant="contained" size="large">Start Game</Button>
      </Box>
    </div>
  );
}
    
export default Board;