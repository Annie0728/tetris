import React from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Rules(props) {
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
        <DialogContentText>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
      
export default Rules;