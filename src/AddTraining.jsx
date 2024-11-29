import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { Button } from '@mui/material';
import * as React from 'react';
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { de } from 'date-fns/locale/de';
import { addTraining } from './api';

export default function AddTraining({currentCustomer}){
    const [training, setTraining] = React.useState({
        date: '',
        duration: '',
        activity: '',
        customer: currentCustomer
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
      Add new Training to customer
    <DialogContent>
     <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={de}>
     <DatePicker
       required
       id="date"
       name="date"
       label="date"
       onChange={(event) => setTraining({ ...training, date: (event) })}
       value={training.date}
       />
     </LocalizationProvider>
     <TextField
      
       required
      
       id="duration"
       name="duration"
       label="duration"
       type="text"
       fullWidth
       variant="standard"
       onChange={handleChange}
       value={training.duration}
     />
     <TextField
       
       required
      
       id="activity"
       name="activity"
       label="activity"
       type="text"
       fullWidth
       variant="standard"
       onChange={handleChange}
       value={training.activity}
     />
   </DialogContent>
    )
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
      </>
    );
};
