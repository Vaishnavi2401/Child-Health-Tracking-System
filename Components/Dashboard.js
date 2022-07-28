import './App.css';
import React from 'react';
//import Header from './Header';
import TemporaryDrawer from './navbar';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
  } from "react-router-dom";

//import bootstrap from 'bootstrap';


const Dashboard = () => {
  return (
    <div>
    
    <TemporaryDrawer/>
    
    </div>
  );
}

export default Dashboard;
