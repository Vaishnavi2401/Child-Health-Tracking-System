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

export default function Healthcard_Immunisation() {

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
        <h5 className='hcard-head'>Immunisation Screening</h5>
        <p></p>
        <table class="table table-bordered table-ge">
            <thead>
            <tr><th>Vaccine Name</th>
            <th>Given Yes/No</th>
            <th>Scheduled Date from</th>
            <th>Scheduled Date To</th>
            </tr></thead>
            <tbody>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">BCG(Bacillus_Calmette_Guerin)</td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Hepatitis-B(Birth_dose)</td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a"> Oral Polio Vaccine(OPV)-0 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Oral Polio Vaccine (OPV)-1 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Oral Polio Vaccine (OPV)-2 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Oral Polio Vaccine (OPV)-3 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Inactivated Polio Vaccine(IPV)-1 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a"> Inactivated Polio Vaccine(IPV)-2 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">PV DPT HepB Hib-1 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">PV DPT HepB Hib-2 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">PV DPT HepB Hib-3 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Rotavirus Vaccine RVV 1 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Rotavirus Vaccine RVV 2 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Rotavirus Vaccine RVV 3 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Pneumococcal Conjugate Vaccine PCV 1</td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a"> Pneumococcal Conjugate Vaccine PCV 2 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a"> Pneumococcal Conjugate Vaccine PCV Booster </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Measles Rubella MR 1 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Vitamin A 1st dose </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">JapaneseEncephalitis_1st </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Diphtheria Pertussis Tetanus DPT booster 1 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a"> MR 2 </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a"> OPV_Booster </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a"> Japanese_Encephalitis(if_applicable) </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a"> Vitamin_A_2nd </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a"> Vitamin_A_3rd </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a"> Vitamin_A_4th </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">    Vitamin_A_5th </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">    Vitamin_A_6th </td>
                 <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">     Vitamin_A_7th  </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Vitamin_A_8th </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">Vitamin_A_9th </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a"> Diphtheria_Pertussis_Tetanus_Booster_(DPT)_booster_2     </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr class="field_wrapper_vaccines">
                <td name="vaccine_a">    Tetanus_and_adult_Diphtheria </td>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr>
                <th>Covid-19 Vaccine</th>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
            </tr>
            <tr>
                <th>Covid-19 Vaccine</th>
                <td>NA</td>
                <td>NA</td>
                <td>NA</td>
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


