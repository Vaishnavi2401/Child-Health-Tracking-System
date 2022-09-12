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
    <div className='hlt-head'>
            <button type="submit" onClick ={() => {navLog("/HealthcardList");}} className="btn btn-primary back-button">
            <ArrowBackIosNewIcon/>
             </button>
             <h3 className='healthcard-head'>Child Healthcard</h3>
    </div>
    <div className='Healthcard-Basic'>
            <Row>
            <Col sm={2}>
                <img src='child-default.png' className='child-image'></img>
            </Col>
            <Col sm={2}>
                <h6>Student ID</h6>
                <h5 id="ChildId"></h5>
                <h5 id="ChildName"></h5>
            </Col>
            <Col sm={2}>
                <h6>Father's Name</h6>
                <h5 id="ChildId"></h5>
            </Col>
            <Col sm={2}>
                <h6>Gender</h6>
                <h5 id="Gender"></h5>
            </Col>
            <Col sm={2}>
                <h6>D.O.B</h6>
                <h5 id="dob"></h5>
            </Col>
            <Col sm={2}>
                <h6>Age</h6>
                <h5><span id="age"></span>Years</h5>
            </Col>
            </Row>
    </div>
    </div>
  );
}


