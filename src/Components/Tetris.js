import React from "react";
import Block from "./Block";
import { Box } from '@mui/material';

function Tetris(props) {
  return (
    <Box 
      height = '100%'
      width = '100%'
      sx={{
        display: 'grid',
        gridTemplateRows: 'repeat(' + props.rows + ', 1fr)',
        gridTemplateColumns: 'repeat(' + props.columns + ', 1fr)',
        gap: '1px'
      }}
    >
      {props.board.map(row => row.map((block, x) => <Block key={x} type={block[0]} />))}
    </Box>
  );
}
    
export default Tetris;