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

export default function Healthcard_BasicScreening() {

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
        <h5 className='hcard-head'>Basic Screening</h5>
        <div>
        <p> </p>
        <h6 className='hcard-subhead'>General Examination</h6>
        <table className="table table-bordered table-ge">
            <tbody>
            <tr>
            <th>Head / Scalp</th>
            <td>NAD</td>
            <th>Nose</th>
            <td>NAD</td>
            </tr>
            <tr>
            <th>Neck</th>
            <td>NAD</td>
            <th>Skin Colour</th>
            <td>NAD</td>
            </tr>
            <tr>
            <th>Skin Texture</th>
            <td>NAD</td>
            <th>Skin Lesions</th>
            <td>NAD</td>
            </tr>
            <tr>
            <th>Mouth Lips</th>
            <td>NAD</td>
            <th>Mouth Dentition</th>
            <td>NAD</td>
            </tr>
            <tr>
            <th>Mouth Gums</th>
            <td>NAD</td>
            <th>Mouth Oral Mucosa</th>
            <td>NAD</td>
            </tr>
            <tr>
            <th>Mouth Tongue</th>
            <td>NAD</td>
            <th>Hair Color</th>
            <td>NAD</td>
            </tr>
            <tr>
            <th>Hair Density</th>
            <td>NAD</td>
            <th>Hair Texture</th>
            <td>NAD</td>
            </tr>
            <tr>
            <th>Alopecia</th>
            <td>NAD</td>
            <th>Chest</th>
            <td>NAD</td>
            </tr>
            <tr>
            <th>Abdomen</th>
            <td>NAD</td>
            <th>Extremity</th>
            <td>feet_NAD</td>
            </tr>
            </tbody>
            </table>

            <h5> </h5>
            <h6 className='hcard-subhead'>Systemic Exam</h6>

            <table class="table table-bordered table-ge">
            <tbody>
            <tr>
              <th>RS Right</th>
                <td>NAD</td>
              <th>RS Left</th>
               <td>NAD</td>
            </tr>
            <tr>
              <th>CVS</th>
                <td>NAD</td>
                <th>Varicose Veins</th>
                <td>NAD</td>
            </tr>
            <tr>
              <th>LMP</th>
                <td>NAD</td>
                <th>CNS</th>
                <td>NAD</td>
            </tr>
            <tr>
              <th>Reflexes</th>
                <td>NAD</td>
                <th>Romberg's</th>
                <td>NAD</td>
            </tr>
            <tr>
              <th>Pupils</th>
                <td>BERL</td>
                <th>P/A</th>
                <td>NAD</td>
            </tr>
            <tr>
              <th>Tenderness</th>
                <td>NAD</td>
                <th>Ascitis</th>
                <td>NAD</td>
            </tr>
            <tr>
             <th>Guarding</th>
                <td>NAD</td>
                <th>Joints</th>
                <td>NAD</td>
            </tr>
            <tr>
             <th>Swollen Joints</th>
                <td>NAD</td>
                <th>Spine/Posture</th>
                <td>NAD</td>
            </tr>
            </tbody>
            </table>

            <h5> </h5>
            <h6 className='hcard-subhead'>Treatment</h6>

            <table class="table table-bordered table-ge">
            <tbody>
            <tr>
            <th>Treatment For</th>
                <td>NAD</td>
            <th>Referral</th>
                <td>Select</td>
            </tr>
            <tr>
            <th>Reason For Referral</th>
                <td>NAD</td>
            <th>Place Referral</th>
                <td>Select</td>
            </tr>
            <tr>
            <th>Outcome</th>
                <td>NAD</td>
            </tr>
             </tbody>
             </table>

            <h5> </h5>
            <h6 className='hcard-subhead'>Birth Defects</h6>
            <p>NAD</p>   

            <h5> </h5>
            <h6 className='hcard-subhead'>Childhood Disease</h6>
            <p>NAD</p>    

            <h5 > </h5>
            <h6 className='hcard-subhead'>Deficiencies</h6>
            <p>NAD</p>   

            <h5> </h5>
            <h6 className='hcard-subhead'>Skin condition</h6>
            <p>NAD</p>   

            <h5> </h5>
            <h6 className='hcard-subhead'>Check Box If Normal</h6>
            <p>NAD</p>

            <h5> </h5>
            <h6 className='hcard-subhead'>Diagnosis</h6>
            <p>NAD</p>     

            <h5> </h5>                     
        </div>
        </div>
        </Col>
    </Row>
    </div>

    
    </div>
  );
}


