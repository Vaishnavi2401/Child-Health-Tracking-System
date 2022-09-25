import './App.css';
import './table.css';
import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";



const ScreeningNav = () => {

    const navLog = useNavigate();

  return (
    <div>
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
            <button type="submit" onClick ={() => {navLog("/BasicInformation");}} className="btn btn-primary screening-btn">Basic Information</button>
            <button type="submit" onClick ={() => {navLog("/FamilyInfo");}} className="btn btn-primary screening-btn">Family Information</button>
            <button type="submit" onClick ={() => {navLog("/BMIS");}} className="btn btn-primary screening-btn">BMI & Symptoms</button>
            <button type="submit" onClick ={() => {navLog("/Vitals");}} className="btn btn-primary screening-btn">Vitals</button>
            <button type="submit" onClick ={() => {navLog("/BasicScreening");}} className="btn btn-primary screening-btn">Basic Screening</button>
            <button type="submit" onClick ={() => {navLog("/Immunisation");}} className="btn btn-primary screening-btn">Immunisation</button>
            <button type="submit" onClick ={() => {navLog("/Auditory");}} className="btn btn-primary screening-btn">Auditory</button>
            <button type="submit" onClick ={() => {navLog("/Dental");}} className="btn btn-primary screening-btn">Dental Checkup</button>
            <button type="submit" onClick ={() => {navLog("/Vision");}} className="btn btn-primary screening-btn">Vision</button>
            <button type="submit" onClick ={() => {navLog("/Psychological");}} className="btn btn-primary screening-btn">Psychological</button>
         </Box>
         </Paper>
        </div>
    </div>
  );
}

export default ScreeningNav;
