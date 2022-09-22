import './App.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreeningNav from './ScreeningNav';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const BasicScreening = () => {

  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav/>

    <div>
        <h4 className='page-head'>Basic Screening </h4>
        <p></p>
        <div>
          
          <Row>
          <Col sm={12}>

          <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '135ch' },
         }}
           noValidate
          autoComplete="off">
            <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>General Examination *</Typography>
          
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
          
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
            <h4>General Examination *</h4>
          <TextField id="outlined-basic" label="Head/Scalp" variant="outlined" />
         <TextField id="outlined-basic" label="Neck" variant="outlined" />
         <TextField id="outlined-basic" label="Skin Colour" variant="outlined" />
         <TextField id="outlined-basic" label="Skin Texture" variant="outlined" />
         <TextField id="outlined-basic" label="Mouth Gums" variant="outlined" />
         <TextField id="outlined-basic" label="Mouth Tongue" variant="outlined" />
         <TextField id="outlined-basic" label="Hair Colour" variant="outlined" />
         <TextField id="outlined-basic" label="Hair Density" variant="outlined" />
         <TextField id="outlined-basic" label="Hair Texture" variant="outlined" />
         <TextField id="outlined-basic" label="Chest" variant="outlined" />
         <TextField id="outlined-basic" label="Abdomen" variant="outlined" />
         </Box>
         
          </Typography>
        </AccordionDetails>
      </Accordion>
    
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Treatments *</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
          <h4>Treatments *</h4>
          <TextField id="outlined-basic" label="Treatment for" variant="outlined" />
          <TextField id="outlined-basic" label="Referral" variant="outlined" />
          <TextField id="outlined-basic" label="Reason for Referral" variant="outlined" />
          <TextField id="outlined-basic" label="Place Referral" variant="outlined" />
          <TextField id="outlined-basic" label="Outcome" variant="outlined" />
         </Box>
         
          </Typography>
        </AccordionDetails>
      </Accordion>
         </Box>
         </Paper>

         

         <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off">
                 
         </Box>
         </Paper>
         </Col>
         </Row>

         <button type="submit" className="btn btn-primary save-button">Accept</button>
         <button type="submit" className="btn btn-primary back-button">Back</button>
         </div>
         </div>
    
    </div>
  );
}

export default BasicScreening;