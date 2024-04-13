import React, { useState } from "react";
import PropTypes from 'prop-types';
import { Dialog, DialogTitle, DialogContent, IconButton, Box, Typography, Tab, Tabs } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

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

function Rules(props) {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog 
      open = {props.open} 
      onClose = {props.handleClose}
      TransitionComponent = {Transition}
      keepMounted
    >
      <DialogTitle sx={{ m: 0, p: 2 }}>Tetris Rules</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={props.handleClose}
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
            <li>Use the "Z" and "X" keys to rotate the tetrominoes counter-clockwise and clockwise respectively</li>
            <li>Use the "Space" key to instantly hard drop the tetromino</li>
            <li>Use the "P" key to pause the game</li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Wacky Tetris is like normal Tetris but with the ability to hold a piece at any time and has extra tetrominoes:
          (Image of the new tetronimoes)
          <ul>
            <li>Use the "C" key to hold a piece. If there is already a piece in the "Hold" box to the left, it swaps the piece currently in play with the one in the box</li>
          </ul>
        </TabPanel>
      </DialogContent>
    </Dialog>
  );
}
      
export default Rules;