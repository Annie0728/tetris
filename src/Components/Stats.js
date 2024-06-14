import React from "react";
import { Box, Typography } from '@mui/material';

// the current stats of the player

function Stats(props) {
  const { score, level, linesMade } = props.stats;

  return (
    <Box alignItems="left">
      <Typography variant="h6" gutterBottom>Score: {score}</Typography>
      <Typography variant="h6" gutterBottom>Level: {level}</Typography>
      <Typography variant="h6" gutterBottom>Lines Made: {linesMade}</Typography>
    </Box>
  );
}
    
export default React.memo(Stats);