import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, IconButton, Box, Typography, Tab, Tabs } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import normalPieces from "../Util/normal_pieces.JPG";
import wackyPieces from "../Util/wacky_pieces.JPG";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

// pop-up containing the rules of the game

function Rules(props) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog 
      open = {props.openRules} 
      onClose = {props.handleCloseRules}
      TransitionComponent = {Transition}
      keepMounted
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>Tetris Rules</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.handleCloseRules}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent dividers>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab label="Regular Rules" {...a11yProps(0)} />
          <Tab label="Wacky Rules" {...a11yProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          Combine different tetrominoes (the pieces) together in horizontal rows to earn points! Try to get the highest score you can! 
          <ul>
            <li>Use the left and right arrow keys to move the tetrominoes</li>
            <li>Use the down arrow key to soft drop the tetromino</li>
            <li>Use the up arrow key or "X" key to rotate the tetromino clockwise</li>
            <li>Use the "Z" to rotate the tetromino counter-clockwise</li>
            <li>Use the "Space" key to instantly hard drop the tetromino</li>
            <li>Use the "C" key to hold a piece. If there is already a piece in the "Hold" box to the left, it swaps the piece currently in play with the one in the box</li>
            <li>Use the "P" key to pause the game</li>
          </ul>
          <Box 
            alignItems="center" 
            justifyContent="center" 
            width="100%" 
            sx={{ display: 'inline-flex', flexDirection: 'column' }}
          >
            <img src={normalPieces} alt="tetrominoes" />
            <Typography variant="caption">The traditional tetrominoes</Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Wacky Tetris is like normal Tetris but has extra minoes and there is no ability to hold a piece. Have fun playing this mode!
          <Box 
            alignItems="center" 
            justifyContent="center" 
            width="100%" 
            mt={2} 
            sx={{ display: 'inline-flex', flexDirection: 'column' }}
          >
            <img src={wackyPieces} alt="wacky minoes" />
            <Typography variant="caption">Extra new pieces in wacky mode</Typography>
          </Box>
        </TabPanel>
      </DialogContent>
    </Dialog>
  );
}
      
export default Rules;