import './App.css';
import React, {useState, useEffect} from 'react';
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
import { useNavigate, useParams } from 'react-router-dom';

const BasicScreening = () => {

  const {child_id} = useParams();    
  const [head,  setHead] = useState('');
  const [neck,  setNeck] = useState('');
  const [skinColor,  setSkinColor] = useState('');
  const [skinTexture,  setSkinTexture] = useState('');
  const [mouthGums,  setMouthGums] = useState('');
  const [mouthTongue,  setMouthTongue] = useState('');
  const [hairColor,  setHairColor] = useState('');
  const [hairDensity,  setHairDensity] = useState('');
  const [hairTexture,  setHairTexture] = useState('');
  const [chest,  setChest] = useState('');
  const [abdomen,  setAbdomen] = useState('');
  const [treatmentFor,  setTreatmentFor] = useState('');
  const [referal,  setReferal] = useState('');
  const [reasonForReferal,  setReasonForReferal] = useState('');
  const [placeReferal,  setPlaceReferal] = useState('');
  const [outcome, setOutcome] = useState('');


  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav child_id ={child_id}/>

    <div>
        <h4 className='page-screeninghead'>Basic Screening </h4>
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
          <TextField value ={head} name = "head" onChange={(e) => setHead(e.target.value)} label="Head/Scalp" variant="outlined" />
         <TextField value ={neck} name = "neck" onChange={(e) => setNeck(e.target.value)} label="Neck" variant="outlined" />
         <TextField value ={skinColor} name = "skinColor" onChange={(e) => setSkinColor(e.target.value)} label="Skin Colour" variant="outlined" />
         <TextField value ={skinTexture} name = "skinTexture" onChange={(e) => setSkinTexture(e.target.value)} label="Skin Texture" variant="outlined" />
         <TextField value ={mouthGums} name = "mouthGums" onChange={(e) => setMouthGums(e.target.value)} label="Mouth Gums" variant="outlined" />
         <TextField value ={mouthTongue} name = "mouthTongue" onChange={(e) => setMouthTongue(e.target.value)} label="Mouth Tongue" variant="outlined" />
         <TextField value ={hairColor} name = "hairColor" onChange={(e) => setHairColor(e.target.value)} label="Hair Colour" variant="outlined" />
         <TextField value ={hairDensity} name = "hairDensity" onChange={(e) => setHairDensity(e.target.value)} label="Hair Density" variant="outlined" />
         <TextField value ={hairTexture} name = "hairTexture" onChange={(e) => setHairTexture(e.target.value)} label="Hair Texture" variant="outlined" />
         <TextField value ={chest} name = "chest" onChange={(e) => setChest(e.target.value)} label="Chest" variant="outlined" />
         <TextField value ={abdomen} name = "abdomen" onChange={(e) => setAbdomen(e.target.value)} label="Abdomen" variant="outlined" />
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
          <TextField value ={treatmentFor} name = "treatmentFor" onChange={(e) => setTreatmentFor(e.target.value)} label="Treatment for" variant="outlined" />
          <TextField value ={referal} name = "referal" onChange={(e) => setReferal(e.target.value)} label="Referal" variant="outlined" />
          <TextField value ={reasonForReferal} name = "reasonForReferal" onChange={(e) => setReasonForReferal(e.target.value)} label="Reason for Referal" variant="outlined" />
          <TextField value ={placeReferal} name = "placeReferal" onChange={(e) => setPlaceReferal(e.target.value)} label="Place Referal" variant="outlined" />
          <TextField value ={outcome} name = "outcome" onChange={(e) => setOutcome(e.target.value)}  label="Outcome" variant="outlined" />
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

         <button type="submit" className="btn btn-primary save-button">Save</button>
         </div>
         </div>
    
    </div>
  );
}

export default BasicScreening;