import './App.css';
import './login.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import Dashboard from './Dashboard';
//import { Link } from 'gatsby';
//import bootstrap from 'bootstrap';
import Button from '@mui/material/Button';
import './Dashboard.js';
import Login from './login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";
import HospitalList from './HospitalList';
import UserList from './UserList';

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route  exact path="/" element = {<Login/>}/> 
      <Route  exact path="/Dashboard" element = {<Dashboard/>}/> 
      <Route  exact path="/HospitalList" element = {<HospitalList/>}/>    
      <Route  exact path="/UserList" element = {<UserList/>}/>  
      </Routes>
      </Router> 
       
    </div>
  );
}

export default App;
