import React, { useState } from "react";
import Block from "./Block";
import { Box } from '@mui/material';
import { rows, columns } from "../Hooks/TetrisHelp";

function Tetris(props) {
  return (
    <Box 
      height = '100%'
      width = '100%'
      sx={{
        display: 'grid',
        gridTemplateRows: 'repeat(' + rows + ', 1fr)',
        gridTemplateColumns: 'repeat(' + columns + ', 1fr)',
        gap: '1px'
      }}
    >
      {props.board.map(row => row.map((block, x) => <Block key={x} type={block[0]} />))}
    </Box>
  );
}
    
export default Tetris;