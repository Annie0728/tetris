import React from "react";
import { Box, Typography, Switch, Tooltip } from '@mui/material';

function Wacky(props) {
  return (
    <Box>
      <Typography variant="button" gutterBottom>Play wacky tetris: </Typography>
      <Tooltip title="Switch on to play wacky Tetris!" arrow componentsProps=
        {{
          tooltip: {
            sx: {
              bgcolor: 'primary.hover',
              '& .MuiTooltip-arrow': {
                color: 'primary.hover',
              },
            },
          },
        }}
      >
        <Switch checked={props.checked} onChange={props.handleWacky} size="large" />
      </Tooltip>
    </Box>
  );
}
      
export default Wacky;