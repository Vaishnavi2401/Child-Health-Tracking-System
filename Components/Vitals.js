import './App.css';
import React, {useState, useEffect} from 'react';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreeningNav from './ScreeningNav';
import { useNavigate, useParams } from 'react-router-dom';

const Vitals = () => {

  const {child_id} = useParams();    
  const [pulse, setPulse] = useState('');
  const [rr,  setRr] = useState('');
  const [hb,  setHb] = useState('');
  const [bp_sys,  setBp_Sys] = useState('');
  const [bp_dys,  setBp_Dys] = useState('');
  const [o2sats,  setO2sats] = useState('');
  const [temp,  setTemp] = useState('');
  return (
    <div>

    <TemporaryDrawer/>
    <ScreeningNav child_id ={child_id}/>
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
            
            <TextField value ={pulse} name = "pulse" onChange={(e) => setPulse(e.target.value)} label="Pulse-Beat/min *" variant="outlined" />
            <TextField value ={bp_sys} name = "bp_sys" onChange={(e) => setBp_Sys(e.target.value)} label="BP-mm-Hg(sys) *" variant="outlined" />
            <TextField value ={bp_dys} name = "bp_dys" onChange={(e) => setBp_Dys(e.target.value)}  label="BP-mm-Hg(dys) *" variant="outlined" />
            <TextField value ={rr} name = "rr" onChange={(e) => setRr(e.target.value)}  label="RR-per min *" variant="outlined" />
            <TextField value ={o2sats} name = "o2sats" onChange={(e) => setO2sats(e.target.value)}  label="O2 Sats- % *" variant="outlined" />
            <TextField value ={hb} name = "hb" onChange={(e) => setHb(e.target.value)} label="HB *" variant="outlined" />
            <TextField value ={temp} name = "temp" onChange={(e) => setTemp(e.target.value)} label="Temperature *" variant="outlined" />
          </Box>
          </Paper>
         
          <button type="submit" className="btn btn-primary save-button">Save</button>
          </div>

    </div>
  );
}

export default Vitals;