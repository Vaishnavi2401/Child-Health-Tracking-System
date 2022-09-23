import './App.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



import ScreeningNav from './ScreeningNav';

const FamilyInfo = () => {
  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav/>

    <div>
        <h4 className='page-screeninghead'>Family Information</h4>
        <div>
          <Row>
          <Col sm={12}>

          <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
            
            <TextField id="outlined-basic" label="No. of Family Members *" variant="outlined" />
            <TextField id="outlined-basic" label="Father's Name *" variant="outlined" />
            <TextField id="outlined-basic" label="Mother's Name *" variant="outlined" />
            <TextField id="outlined-basic" label="Occupation of Father *" variant="outlined" />
            <TextField id="outlined-basic" label="Occupation of Mother *" variant="outlined" />
            <TextField id="outlined-basic" label="Remarks *" variant="outlined" />
           
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

export default FamilyInfo;