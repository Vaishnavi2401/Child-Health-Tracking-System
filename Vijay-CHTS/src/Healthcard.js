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

const data = [
    { SrNo: 1, ChildID: "PUN1023" , ChildName: "ABC" },
    ]

export default function Healthcard() {

    const navLog = useNavigate();
  return (
    <div>
    <TemporaryDrawer/>
    <div>
            <button type="submit" onClick ={() => {navLog("/HealthcardList");}} className="btn btn-primary back-button">
               Back
             </button>
    </div>
    <div className='Healthcard-Basic'>
            <Row>
            <Col sm={2}>
                <img src='src/Images/child-default.png' className=''></img>
            </Col>
            <Col sm={2}>Screening Information</Col>
            <Col sm={2}>Screening Information</Col>
            <Col sm={2}>Screening Information</Col>
            <Col sm={2}>Screening Information</Col>
            <Col sm={2}>Screening Information</Col>
            </Row>
    </div>
    <div>
    
    <Row>
        <Col sm={3}>
        <div>
        <Row>
            <Col sm={4}></Col>
            <Col sm={8}><h5>Screening Information</h5></Col>
            </Row>
            <Row>
            <Col sm={4}></Col>
            <Col sm={8}><button type="submit" onClick ={() => {("#").show(); }} className="btn"><h6>Basic Screeinig</h6></button></Col>
            </Row>
            <Row>
            <Col sm={4}></Col>
            <Col sm={8}><button type="submit" onClick ={() => { }} className="btn"><h6>BMI Screening</h6></button></Col>
            </Row>
            <Row>
            <Col sm={4}></Col>
            <Col sm={8}><button type="submit" onClick ={() => { }} className="btn"><h6>Vital Screening</h6></button></Col>
            </Row>
            <Row>
            <Col sm={4}></Col>
            <Col sm={8}><button type="submit" onClick ={() => { }} className="btn"><h6>Immunisation Screening</h6></button></Col>
            </Row>
            <Row>
            <Col sm={4}></Col>
            <Col sm={8}><button type="submit" onClick ={() => { }} className="btn"><h6>Auditory Screening</h6></button></Col>
            </Row>
            <Row>
            <Col sm={4}></Col>
            <Col sm={8}><button type="submit" onClick ={() => { }} className="btn"><h6>Dental Checkup</h6></button></Col>
            </Row>
            <Row>
            <Col sm={4}></Col>
            <Col sm={8}><button type="submit" onClick ={() => { }} className="btn"><h6>Vision Screening</h6></button></Col>
            </Row>
            <Row>
            <Col sm={4}></Col>
            <Col sm={8}><button type="submit" onClick ={() => { }} className="btn"><h6>Psychological Screening</h6></button></Col>
            </Row>

        </div>
        </Col>
        <Col sm={9}>
        <div className='healthcard-report'>
        <h5>Basic Screening</h5>
        <div>
        <p> </p>
        <h6>General Examination</h6>
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
        </div>
        </div>
        </Col>
    </Row>
    </div>

    
    </div>
  );
}

