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
import Healthcard from './Healthcard';
import HealthcardNav from './HealthcardNav';

const data = [
    { SrNo: 1, ChildID: "PUN1023" , ChildName: "ABC" },
    ]

export default function Healthcard_Auditory() {

    const navLog = useNavigate();
  return (
    <div>
    <TemporaryDrawer/>
    <Healthcard/>
    <div>
    <Row>
        <Col sm={3}>
        <HealthcardNav/>
        </Col>
        <Col sm={9}>
        <div className='healthcard-report'>
        <h5 className='hcard-head'>Auditory Screening</h5>
        <p></p>
        <table class="table table-bordered table-ge">
        <tbody>
        <tr>
            <th>Hearing Test Right</th>
            <td>NAD</td>
            <th>Hearing Test Left</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Otoscopic exam</th>
            <td>NAD</td>
            <th>Treatment Given</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Comment</th>
            <td>NAD</td>
            <th></th>
            <td></td>
        </tr>
        </tbody>
        </table>
        <h6 className='hcard-subhead'>Present Fields</h6>
        <p>NAD</p> 
        <p>  </p>
        </div>
        </Col>
    </Row>
    </div>

    
    </div>
  );
}


