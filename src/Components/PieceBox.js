import React from "react";
import Block from "./Block";
import { Box, Stack, Typography } from '@mui/material';
import { buildBoard, transferToBoard } from '../Util/TetrisHelp';

function PieceBox(props) {
  let board = buildBoard(4, 4);

  return (
    <div className="PieceBox">
      <Box 
        height = '20vh'
        width = '20vh'
        gap={4}
        p={2}
        mb={3}
        sx={{ 
          border: '3px solid white',
          bgcolor: 'board_background.main'
        }}
      >
        <Stack alignItems="center">
          <Typography variant="h6" gutterBottom>Next Piece:</Typography>
          <Box 
            height = '15vh'
            width = '15vh'
            sx={{
              display: 'grid',
              gridTemplateRows: 'repeat(4, 1fr)',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1px'
            }}
          >
            {board.map(row => row.map((block, x) => <Block key={x} type={block[0]} />))}
          </Box>
        </Stack>
      </Box>
    </div>
  );
}
    
export default React.memo(PieceBox);