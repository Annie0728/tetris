import React, { useState } from "react";
import { Box, Typography } from '@mui/material';
import BlockIcon from '@mui/icons-material/Block';

function HoldBox(props) {
  return (
    <div className="PieceBox">
      <Box 
        height = '20vh'
        width = '20vh'
        gap={4}
        p={2}
        sx={{ 
          border: '3px solid white',
          bgcolor: 'board_background.main'
        }}
      >
        <Typography variant="h6" gutterBottom>Held Piece:</Typography>
        {props.wacky ? null : <BlockIcon sx={{ fontSize: 140, color: '#8A84E2' }} />}
      </Box>
    </div>
  );
}
    
export default HoldBox;