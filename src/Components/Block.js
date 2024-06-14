import React from "react";
import { Box } from '@mui/material';
import { minoes } from './Tetromino';

// block in the board grid

function Block(props) {
  // get the type of the block
  const getType = (type, isGhost) => {
    if (isGhost) {
      const lineIndex = type.indexOf("_");
      return type.substring(0, lineIndex);
    } else {
      return type;
    }
  }

  const isFill = props.type === 0; // see if the block is empty
  const isGhost = (isFill ? false : props.type.includes("ghost")); // see if the block is a ghost
  const type = getType(props.type, isGhost); // type of the block
  const color = minoes[type].color; // color of the block

  // if fill, return empty box
  // if ghost, return colored outline of block
  // if block, return colored block
  return (isFill ?
    <Box width = 'auto' />
    :
    <Box 
      width = 'auto'
      sx={{
        bgcolor: isGhost ? '#32363D' : color + 'CC',
        border: isGhost ? '2px solid' : '4px solid',
        borderTopColor: isGhost ? color : color + 'CC',
        borderLeftColor: isGhost ? color : color + '3F',
        borderBottomColor: isGhost ? color : color + '19',
        borderRightColor: isGhost ? color : color + '99',
        borderRadius: '4px'
      }}
    />
  );
}
      
export default Block;