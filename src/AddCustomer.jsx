import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import * as React from 'react';
import AppDialogContent from './AppDialogContent';

export default function AddCustomer({addCustomer}){
    const [customer, setCustomer] = React.useState({
        firstname: '',
        lastname: '',
        streetaddress: '',
        postcode: '',
        city: '',
        email: '',
        phone:''
    })

    const handleChange = event => {
        setCustomer({...customer, [event.target.name]: event.target.value})
    }
    const handleSave = () =>{
        addCustomer(customer)
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
        <Button onClick={handleClickOpen}>Add Customer</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <DialogTitle>New Customer</DialogTitle>
        <AppDialogContent customer = {customer} handleChange= {handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
      </>
    );
};
