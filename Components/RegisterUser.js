import './App.css';
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

export default function RegisterUser(){

  const [DOB, setDOB] = React.useState(null);

  const [JDate, setJDate] = React.useState(null);

  const [Group, setGroup] = React.useState('');

  const handleGroup = (event) => {
    setGroup(event.target.value);
  };
  const [Gender, setGender] = React.useState('');

  const handleGender = (event) => {
    setGender(event.target.value);
  };

  const [Marital, setMarital] = React.useState('');

  const handleMarital = (event) => {
    setMarital(event.target.value);
  };

  return (
    <div>
    <TemporaryDrawer/>
      <div>
        <h4 className='page-head'>Register New User</h4>
        <div>
          <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
         <TextField id="outlined-basic" label="First Name" variant="outlined" />
         <TextField id="outlined-basic" label="Middle Name" variant="outlined" />
         <TextField id="outlined-basic" label="Last Name" variant="outlined" />
         <TextField id="outlined-basic" label="Mobile Number" variant="outlined" />
         <TextField id="outlined-basic" label="Email ID" variant="outlined" />
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
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
            label="Joining Date"
            id=""
            value={JDate}
            onChange={(newValue) => {
             setJDate(newValue);
             }}
             renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Group</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Group}
          label="Group"
          onChange={handleGroup}
        >
          <MenuItem value={10}>Admin</MenuItem>
          <MenuItem value={20}>CHO</MenuItem>
          <MenuItem value={30}>Expert</MenuItem>
        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="User ID" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
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
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Marital Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={Marital}
          label="Marital Status"
          onChange={handleMarital}
        >
          <MenuItem value={10}>Married</MenuItem>
          <MenuItem value={20}>Unmarried</MenuItem>
        
        </Select>
      </FormControl>
         </Box>
         </Paper>
        </div>
      </div>
    </div>
  );
}

