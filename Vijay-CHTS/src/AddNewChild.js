import './App.css';
import './table.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';


export default function AddNewChild(){

  const [DOB, setDOB] = React.useState(null);

  const [Group, setGroup] = React.useState('');

  const handleGroup = (event) => {
    setGroup(event.target.value);
  };
  const [Gender, setGender] = React.useState('');

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  return (
    <div>
    <TemporaryDrawer/>
      <div>
        <h4 className='page-head'>Add New Child</h4>
        <div>
          <Paper className="form-add">
          <h5 className='page-subhead'>Add Child School Details</h5>
        <Box
       component="form"
         sx={{
            
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Block</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Group}
          label="Block"
          onChange={handleGroup}
        >
          <MenuItem value={10}>Pune</MenuItem>
          <MenuItem value={20}>Hinjewadi</MenuItem>
          <MenuItem value={30}></MenuItem>
        </Select>
        </FormControl>

        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">School Registration Number</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Group}
          label="School Registration Number"
          onChange={handleGroup}
        >
          <MenuItem value={10}>1</MenuItem>
          <MenuItem value={20}>2</MenuItem>
          <MenuItem value={30}>3</MenuItem>
        </Select>
        
        </FormControl>

        </Box>
        </Paper>

        <Paper className="form-add">
        <Box component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
         <h5 className='page-subhead'>Child Information</h5>
         <TextField id="outlined-basic" label="Child Name" variant="outlined" />
         <TextField id="outlined-basic" label="Age" variant="outlined" />
         <TextField id="outlined-basic" label="Child ID" variant="outlined" />
         <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Gender}
          label="Gender"
          onChange={handleGender}
        >
          <MenuItem value={10}>Male</MenuItem>
          <MenuItem value={20}>Female</MenuItem>
          <MenuItem value={30}>Other</MenuItem>
        </Select>
      </FormControl>
         <TextField id="outlined-basic" label="Aadhar Number" variant="outlined" />
         <TextField id="outlined-basic" label="Insurance Number" variant="outlined" />
         
         
         <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            label="Date of Birth"
            id=""
            value={DOB}
            onChange={(newValue) => {
             setDOB(newValue);
             }}
             renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          
          
      <TextField id="outlined-basic" label="User ID" variant="outlined" />
      </Box>
         </Paper>

         <Paper className="form-add">
        <Box component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
        <h5 className='page-subhead'>Child Family Details</h5>
         <TextField id="outlined-basic" label="Father's Name" variant="outlined" />
         <TextField id="outlined-basic" label="Mother's Name" variant="outlined" />
         <TextField id="outlined-basic" label="Parents Mobile Number" variant="outlined" />
         <TextField id="outlined-basic" label="Father Occupation" variant="outlined" />
         <TextField id="outlined-basic" label="Mother Occupation" variant="outlined" />
         {/* <TextField className="address" id="outlined-basic" label="Address" variant="outlined" /> */}
         <TextField id="outlined-basic" label="Pincode" variant="outlined" />
         <TextField id="outlined-basic" label="Email ID" variant="outlined" />
         </Box>
        </Paper>

        <Paper className="form-add">
        <Box component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
        <h5 className='page-subhead'>Child Address Details</h5>
         <TextField id="outlined-basic" label="House Number" variant="outlined" />
         <TextField id="outlined-basic" label="Street" variant="outlined" />
         <TextField id="outlined-basic" label="Area" variant="outlined" />
         <TextField id="outlined-basic" label="Pincode" variant="outlined" />
         </Box>
        </Paper>

  
            <button type="submit" className="btn btn-primary save-button">Save Details</button>
          
        </div>
      </div>
    </div>
  );
}
