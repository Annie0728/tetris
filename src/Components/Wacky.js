import React from "react";
import { Box, Typography, Switch, Tooltip } from '@mui/material';

function Wacky(props) {
  return (
    <Box display="flex" direction="row">
      <Typography variant="h6" gutterBottom>Play wacky tetris: </Typography>
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