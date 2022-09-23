import './App.css';
import './table.css';
import './New.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



import ScreeningNav from './ScreeningNav';

const BMIS = () => {
  const [DOB, setDOB] = React.useState(null);
  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav/>
    <div>
        <h4 className='page-screeninghead'>Growth Monitoring</h4>
        <div>

          <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
            

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
            
            <TextField id="outlined-basic" label="BMI" variant="outlined" />
            <TextField id="outlined-basic" label="Gender" variant="outlined" />
            <TextField id="outlined-basic" label="Weight-kgs" variant="outlined" />
            <TextField id="outlined-basic" label="Height-cms" variant="outlined" />
            <TextField id="outlined-basic" label="Arm Size *" variant="outlined" />
            <h5>Age in Years</h5>
            <TextField id="outlined-basic" label="Years" variant="outlined" />
            <TextField id="outlined-basic" label="Months" variant="outlined" />
            <TextField id="outlined-basic" label="Days" variant="outlined" />

          </Box>
          </Paper>

          <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
          <h4 className='page-subhead'>Medical Event</h4>

          <TextField id="outlined-basic" label="Symptoms" variant="outlined" />
          <TextField id="outlined-basic" label="Remark" variant="outlined" />
          <TextField id="outlined-basic" label="Note" variant="outlined" />

          </Box>
          </Paper>

            <button type="submit" className="btn btn-primary save-button">Save</button>
          </div>
          </div>
    
    </div>
  );
}

export default BMIS;