import React from "react";
import Wacky from "./Wacky";
import { Box, Stack, Button, Tooltip } from '@mui/material';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import RuleIcon from '@mui/icons-material/Rule';

// menu screen

function Menu(props) {
  return (
    <Box
      height = '100%'
      width = '100%'
      display="flex" 
      alignItems="center" 
      justifyContent="center"
    >
      <Stack spacing={5} alignItems="center">
        <Button 
          variant="contained" 
          size="large" 
          endIcon={<PlayCircleFilledWhiteIcon />} 
          onClick={props.startGame}
        >
          Start New Game
        </Button>
        <Wacky wacky={props.wacky} handleWacky={props.handleWacky} />
        <Tooltip title="How to play Tetris" arrow componentsProps=
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
          <Button 
            variant="contained" 
            size="large" 
            endIcon={<RuleIcon />} 
            onClick={props.handleOpenRules}
            sx={{ width: '120px' }}
          >
            Rules
          </Button>
        </Tooltip>
      </Stack>
    </Box>
  );
}
    
export default Menu;