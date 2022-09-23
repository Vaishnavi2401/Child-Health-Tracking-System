import './App.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreeningNav from './ScreeningNav';
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Auditory = () => {
  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav/>

    <div>
        <h4 className='page-screeninghead'>Auditory Screening</h4>
        <div>
          <Row>
          <Col sm={6}>

          <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
         }}
           noValidate
          autoComplete="off">
            
         <TextField id="outlined-basic" label="Comments" variant="outlined" />
         </Box>
         </Paper>
         </Col>

         <Col sm={6}>
         <Paper>
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '60ch' },
         }}
           noValidate
          autoComplete="off"
          >

         <h4 className='page-Subhead'>Check if Present</h4>

         <FormGroup>
         <FormControlLabel control={<Checkbox defaultUnChecked />} label="Allergic Reaction" />
         <FormControlLabel control={<Checkbox defaultUnChecked />} label="Cleft IP" />
         <FormControlLabel control={<Checkbox defaultUnChecked />} label="Cleft Palate" />
         <FormControlLabel control={<Checkbox defaultUnChecked />} label="Congenital Abnormility of Ear" />
         <FormControlLabel control={<Checkbox defaultUnChecked />} label="Hearing Loss" />
         <FormControlLabel control={<Checkbox defaultUnChecked />} label="Tongue Tie" />
         </FormGroup>
         
         </Box>
         </Paper>
         </Col>
         </Row>

         <button type="submit" className="btn btn-primary save-button">Save</button>

         </div>
         </div>
    </div>
  );
}

export default Auditory;