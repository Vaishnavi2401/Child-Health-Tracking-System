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

export default function Healthcard_BMI() {

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
        <h5 className='hcard-head'>BMI Screening</h5>
        <p></p>
        <table class="table table-bordered table-ge">
        <tbody>
        <tr>
            <th>Height- cm</th>
            <td>NAD</td>
            <th>Weight- Kg</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>BMI</th>
            <td>NAD</td>
            <th>Weight for height</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Weight for age</th>
            <td>NAD</td>
            <th>Height for age</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Arm Size</th>
            <td>NAD</td>
            <th>Symptoms</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Remark</th>
            <td>NAD</td>
            <th>Note</th>
            <td>NAD</td>  
        </tr>
        </tbody>
        </table>
        <p>  </p>
        </div>
        </Col>
    </Row>
    </div>

    
    </div>
  );
}


