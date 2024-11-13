import { TextField, DialogContent } from "@mui/material";


export default function customerDialogContent({ customer, handleChange}){
   return(
   <DialogContent>
    <TextField
      autoFocus
      required
    
      id="firstname"
      name="firstname"
      label="firstname"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={customer.firstname}
    />
    <TextField
     
      required
     
      id="lastname"
      name="lastname"
      label="lastname"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={customer.lastname}
    />
    <TextField
      
      required
     
      id="streetaddress"
      name="streetaddress"
      label="streetaddress"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={customer.streetaddress}
    />
    <TextField
     
      required
     
      id="postcode"
      name="postcode"
      label="postcode"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={customer.postcode}
    />
     <TextField

      required
    
      id="city"
      name="city"
      label="city"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={customer.city}
    />
     <TextField
      required
    
      id="email"
      name="email"
      label="email"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={customer.email}
    />
    <TextField
    required
  
    id="phone"
    name="phone"
    label="phone"
    type="text"
    fullWidth
    variant="standard"
    onChange={handleChange}
    value={customer.phone}
  />
  </DialogContent>
   )
}
