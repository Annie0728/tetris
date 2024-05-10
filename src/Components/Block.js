import React from "react";
import { Box } from '@mui/material';
import { minoes } from './Tetromino';

function Block(props) {
  var isFill = props.type === 'fill';
  var color = minoes[props.type].color;

  return (
    <Box
      width = 'auto'
      sx={{
        bgcolor: isFill ? color : color + 'CC',
        border: isFill ? '0px solid' : '4px solid',
        borderBottomColor: isFill ? color : color + 'CC',
        borderLeftColor: isFill ? color : color + '3F',
        borderTopColor: isFill ? color : color + '19',
        borderRightColor: isFill ? color : color + '99'
      }}
    />
  );
}
      
export default Block;