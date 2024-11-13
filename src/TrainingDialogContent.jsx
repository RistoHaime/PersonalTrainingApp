import { TextField, DialogContent } from "@mui/material";


export default function trainingDialogContent({ training, handleChange}){
    return(
    <DialogContent>
     <TextField
       autoFocus
       required
     
       id="date"
       name="date"
       label="date"
       type="text"
       fullWidth
       variant="standard"
       onChange={handleChange}
       value={training.date}
     />
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
  }