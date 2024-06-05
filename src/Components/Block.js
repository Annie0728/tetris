import React from "react";
import { Box } from '@mui/material';
import { minoes } from './Tetromino';

function Block(props) {
  const getType = (type, isGhost) => {
    if (isGhost) {
      const lineIndex = type.indexOf("_");
      return type.substring(0, lineIndex);
    } else {
      return type;
    }
  }

  const isFill = props.type === 0;
  const isGhost = (isFill ? false : props.type.includes("ghost"));
  const type = getType(props.type, isGhost);
  const color = minoes[type].color;

  return (isFill ?
    <Box width = 'auto' />
    :
    <Box 
      width = 'auto'
      sx={{
        bgcolor: isGhost ? '#32363D' : color + 'CC',
        border: isGhost ? '2px solid' : '4px solid',
        borderBottomColor: isGhost ? color : color + 'CC',
        borderLeftColor: isGhost ? color : color + '3F',
        borderTopColor: isGhost ? color : color + '19',
        borderRightColor: isGhost ? color : color + '99'
      }}
    />
  );
}
      
export default Block;