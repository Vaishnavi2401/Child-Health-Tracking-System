import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
  } from "react-router-dom";
//import Table from 'react-bootstrap/Table';
import { styled } from '@mui/material/styles';
//import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//import bootstrap from 'bootstrap';



const data = [
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },

]

export default function HospitalList() {
	

	return (
        <div>
        <Header/>
        
        <div className="body-Content2">
        
    
        <table>
        
            <tr>
                <th colspan="5" id="show">Show<input type="number" size="10" defaultValue="10"></input>Entries</th>
                <th colspan="3" id="search">Search<input size="10"></input></th>
            </tr>
            {/* <hr> */}
            <tr>
                <th>Sr. No</th>
                <th>Clg Ref ID</th>
                <th>User Name</th>
                <th>Mobile No</th>
                <th>Email</th>
                <th>Group</th>
                <th>Status</th>
                <th>Actions</th>
            </tr>
    
            {data.map((val, key) => {
            return (
                <tr key={key}>
                <td>{val.SrNo}</td>
                <td>{val.ClgRefID}</td>
                <td>{val.UserName}</td>
                <td>{val.MobileNo}</td>
                <td>{val.Email}</td>
                <td>{val.Group}</td>
                <td>{val.Status}</td>
                <td>{val.Actions}</td>
                </tr>
            )
            })}
        </table>
        </div>
        </div>
    );
    }
