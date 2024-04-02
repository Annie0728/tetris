import React, { useState } from "react";
import { Box } from '@mui/material';

function PieceBox() {
  return (
    <div className="PieceBox">
      <Box 
        height = '20vh'
        width = '250px'
        gap={4}
        p={2}
        sx={{ 
          borderRadius: '25px',
          border: '3px solid white',
          bgcolor: 'board_background.main'
        }}
      >
      </Box>
    </div>
  );
}
    
export default PieceBox;