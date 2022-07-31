import './App.css';
import './table.css';
import React from 'react';
//import Header from './Header';
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


//import bootstrap from 'bootstrap';

export default function ScreeningInfo(){

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
        <h3 className='page-head'>Screening Information</h3>
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
        <button className="btn btn-primary ">Basic Information</button>
        <button className="btn btn-primary ">Family Information</button>
        <button className="btn btn-primary ">BMI & Symptoms</button>
        <button className="btn btn-primary ">Basic Screening</button>
        <button className="btn btn-primary ">Immunisation</button>
        <button className="btn btn-primary ">Dental Check Up</button>
        <button className="btn btn-primary ">Vision</button>
        <button className="btn btn-primary ">Psychological</button>

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
         <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
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
         <h5 className='page-subhead'>Anganwadi Information</h5>
         <TextField id="outlined-basic" label="Child ID" variant="outlined" />
         <TextField id="outlined-basic" label="Scheduled ID" variant="outlined" />
         <TextField id="outlined-basic" label="Child Anganwadi" variant="outlined" />
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
         <TextField className="address" id="outlined-basic" label="Address" variant="outlined" />
         <TextField id="outlined-basic" label="Pincode" variant="outlined" />
         
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
      </Box>
         </Paper>


      {/* <button className="btn btn-primary save-button">Save Details</button> */}

      {/* Button.defaultrops = {
        color: 'steelblue'
    }
       */}
       
        </div>
      </div>
    </div>
  );
}

