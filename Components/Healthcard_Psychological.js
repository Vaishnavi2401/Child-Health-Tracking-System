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

export default function Healthcard_Psychological() {

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
        <h5 className='hcard-head'>Psychological Screening</h5>
        <p></p>
        <table class="table table-bordered table-ge">
        <tbody>
        <tr>
            <th>Difficulty In Reading</th>
            <td>NAD</td>
            <th>Difficulty In Writing</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Hyper Reactive Behaviour</th>
            <td>NAD</td>
            <th>Aggresive Behaviour</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Passing Urine/Stool (Bed/Classroom)</th>
            <td>NAD</td>
            <th>Poor Mixing With Peers</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Poor Eye Contact</th>
            <td>NAD</td>
            <th>Scholostic Backwardness</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Any Other</th>
            <td>NAD</td>
            <th></th>
            <td></td>  
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


