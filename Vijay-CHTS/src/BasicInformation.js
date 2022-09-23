import './App.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreeningNav from './ScreeningNav';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const BasicInformation = () => {
  const [DOB, setDOB] = React.useState(null);
  return (
    <div>
    <TemporaryDrawer/>
    <ScreeningNav/>
    <div>
        <h4 className='page-head'>Child Basic Information</h4>
        <div>
          <Row>
          <Col sm={6}>

          <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
            <h4 className='page-subhead'>School Information</h4>
            
         <TextField id="outlined-basic" label="Child ID" variant="outlined" />
         <TextField id="outlined-basic" label="Child School" variant="outlined" />

    
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
            <h4 className='page-subhead'>Child Information</h4>
            
         <TextField id="outlined-basic" label="First Name" variant="outlined" />
         <TextField id="outlined-basic" label="Last Name" variant="outlined" />
         <TextField id="outlined-basic" label="Age" variant="outlined" />
         {/* <TextField id="outlined-basic" label="DOB" variant="outlined" /> */}
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
         <TextField id="outlined-basic" label="Gender" variant="outlined" />
         <TextField id="outlined-basic" label="Aadhar Number" variant="outlined" />
         <TextField id="outlined-basic" label="Insurance Number" variant="outlined" />
         <TextField id="outlined-basic" label="Address" variant="outlined" />
         <TextField id="outlined-basic" label="Pincode" variant="outlined" />
                 
         </Box>
         </Paper>
         </Col>
         
         <Col sm={6}>
         <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
          <h4>Past Records</h4>
          <TextField id="outlined-basic" label="Past Medical History" variant="outlined" />
          <TextField id="outlined-basic" label="Previous Hospitalization" variant="outlined" />
          </Box>
          </Paper>

         </Col>
         </Row>
         <button type="submit" className="btn btn-primary save-button">Accept</button>
        </div>
        </div>
    </div>
  );
}

export default BasicInformation;