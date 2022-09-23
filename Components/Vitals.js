import './App.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreeningNav from './ScreeningNav';

const Vitals = () => {
  return (
    <div>

    <TemporaryDrawer/>
    <ScreeningNav/>
    <h4 className='page-screeninghead'>Vital Information</h4>
        <div>
          
          <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
            
            <TextField id="outlined-basic" label="Pulse-Beat/min *" variant="outlined" />
            <TextField id="outlined-basic" label="BP-mm-Hg(sys) *" variant="outlined" />
            <TextField id="outlined-basic" label="BP-mm-Hg(dys) *" variant="outlined" />
            <TextField id="outlined-basic" label="RR-per min *" variant="outlined" />
            <TextField id="outlined-basic" label="O2 Sats- % *" variant="outlined" />
            <TextField id="outlined-basic" label="HB *" variant="outlined" />
            <TextField id="outlined-basic" label="Temperature *" variant="outlined" />
          </Box>
          </Paper>
         
          <button type="submit" className="btn btn-primary save-button">Save</button>
          </div>

    </div>
  );
}

export default Vitals;