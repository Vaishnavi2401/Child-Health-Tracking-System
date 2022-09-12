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

export default function Healthcard_Vision() {

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
        <h5 className='hcard-head'>Vision Screening</h5>
        <p></p>
        <table class="table table-bordered table-ge">
        <tbody>
        <tr>
            <th>Eye</th>
            <td>NAD</td>
            <th>Color blindness</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Oral Ulcers</th>
            <td>NAD</td>
            <th>Gum Bleeding</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Vision screening</th>
            <td>NAD</td>
            <th>Vision Screening Comment</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Food Impaction</th>
            <td>NAD</td>
            <th>Carious Teeth</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Vision With Glasses</th>
            <td>NAD</td>
            <th>Vision Without Glasses</th>
            <td>NAD</td>  
        </tr>
        <tr>
            <th>Eye Muscle Control</th>
            <td>NAD</td>
            <th>Refractive error</th>
            <td>NAD</td>
        </tr>
        <tr>
            <th>Visual Field Perimetry</th>
            <td>NAD</td>
            <th>Reffered To Specialist</th>
            <td>NAD</td>  
        </tr>
        <tr>
            <th>Comment</th>
            <td>NAD</td>
            <th>Treatment given</th>
            <td>NAD</td>  
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


