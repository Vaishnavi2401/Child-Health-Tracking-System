import './App.css';
import React from 'react';
//import Header from './Header';
import TemporaryDrawer from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import {TableBody, IconButton, InputBase,
    TableCell, TableContainer, TableHead, 
    TableRow, Paper, Table, TablePagination, tableCellClasses} from '@mui/material';
//import bootstrap from 'bootstrap';
import HealthcardList from './HealthcardList';
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const data = [
    { SrNo: 1, ChildID: "PUN1023" , ChildName: "ABC" },
    ]

export default function Healthcard() {

    const navLog = useNavigate();
  return (

    <div>
        <div className='hcard-nav'>
        <Row>
            <Col sm={3}></Col>
            <Col sm={9}><h5>Screening Information</h5></Col>
            </Row>
            <Row>
            <Col sm={3}></Col>
            <Col sm={9}><button type="submit" onClick ={() => {navLog("/Healthcard_BasicScreening"); }} className="btn hcard-nav-btn"><h6>Basic Screeinig</h6></button></Col>
            </Row>
            <Row>
            <Col sm={3}></Col>
            <Col sm={9}><button type="submit" onClick ={() => {navLog("/Healthcard_BMI");  }} className="btn hcard-nav-btn"><h6>BMI Screening</h6></button></Col>
            </Row>
            <Row>
            <Col sm={3}></Col>
            <Col sm={9}><button type="submit" onClick ={() => {navLog("/Healthcard_Vital"); }} className="btn hcard-nav-btn"><h6>Vital Screening</h6></button></Col>
            </Row>
            <Row>
            <Col sm={3}></Col>
            <Col sm={9}><button type="submit" onClick ={() => {navLog("/Healthcard_Immunisation"); }} className="btn hcard-nav-btn"><h6>Immunisation Screening</h6></button></Col>
            </Row>
            <Row>
            <Col sm={3}></Col>
            <Col sm={9}><button type="submit" onClick ={() => {navLog("/Healthcard_Auditory"); }} className="btn hcard-nav-btn"><h6>Auditory Screening</h6></button></Col>
            </Row>
            <Row>
            <Col sm={3}></Col>
            <Col sm={9}><button type="submit" onClick ={() => {navLog("/Healthcard_Dental"); }} className="btn hcard-nav-btn"><h6>Dental Checkup</h6></button></Col>
            </Row>
            <Row>
            <Col sm={3}></Col>
            <Col sm={9}><button type="submit" onClick ={() => { navLog("/Healthcard_Vision");}} className="btn hcard-nav-btn"><h6>Vision Screening</h6></button></Col>
            </Row>
            <Row>
            <Col sm={3}></Col>
            <Col sm={9}><button type="submit" onClick ={() => {navLog("/Healthcard_Psychological"); }} className="btn hcard-nav-btn"><h6>Psychological Screening</h6></button></Col>
            </Row>

        </div>
        
    </div>

  );
}


