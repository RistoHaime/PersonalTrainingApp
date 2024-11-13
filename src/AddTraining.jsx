import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import * as React from 'react';
import TrainingDialogContent from './TrainingDialogContent';

export default function AddTraining({addTraining}){
    const [training, setTraining] = React.useState({
        date: '',
        duration: '',
        activity: '',
    })

    const handleChange = event => {
        setTraining({...training, [event.target.name]: event.target.value})
    }
    const handleSave = () =>{
        addTraining(training)
        setOpen(false);
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    return(
        <>
        <Button onClick={handleClickOpen}>Add Training</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <DialogTitle>New Training</DialogTitle>
        <TrainingDialogContent training = {training} handleChange= {handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
      </>
    );
};
