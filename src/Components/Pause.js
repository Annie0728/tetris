import React from "react";
import { Backdrop, Stack, Typography } from '@mui/material';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';

// pause screen

function Pause(props) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={props.paused}
    >
      <Stack spacing={3} justifyContent="center" alignItems="center">
        <PauseCircleIcon size="large" style={{ fontSize: 60 }} />
        <Typography variant="h6" gutterBottom>Game is paused</Typography>
      </Stack>
    </Backdrop>
  );
}
    
export default Pause;