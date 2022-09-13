import './App.css';
import './login.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard';
//import { Link } from 'gatsby';
//import bootstrap from 'bootstrap';
import Button from '@mui/material/Button';
import './Dashboard.js';


const Login = () => {
    
    const navLog = useNavigate();
    
  return (
    <div className="container-fluid" id="login">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-3">
        <form className="login-form">
            <div className="mb-3">
              <label htmlFor="inputPhone" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="inputPhone" aria-describedby="emailHelp"></input>
            </div>
            <div className="mb-3">
              <label htmlFor="loginPassword" className="form-label">Password</label>
              <input type="password" className="form-control" id="loginPassword"></input>
            </div>
            <div className="mb-3 form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
              <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            </div>
         
             <button type="submit" onClick ={() => {navLog("/Dashboard");}} className="btn btn-primary login-button">
                Login
             </button> 
          
             
          </form>
        </div>
    </div>
    </div>
    );
}

export default Login;