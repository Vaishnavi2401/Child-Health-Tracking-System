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
import RegisterUser from './RegisterUser';
import BasicScreening from './BasicScreening';
import BasicInformation from './BasicInformation';
import Auditory from './Auditory';
import FamilyInfo from './FamilyInfo';
import Immunisation from './Immunisation';
import Psychological from './Psychological';
import Vitals from './Vitals';
import BMIS from './BMIS';
import Dental from './Dental';
import Vision from './Vision';
import AddNewChild from './AddNewChild';
import ChildList from './ChildList';

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route  exact path="/" element = {<Login/>}/> 
      <Route  exact path="/Dashboard" element = {<Dashboard/>}/> 
      <Route  exact path="/HospitalList" element = {<HospitalList/>}/>    
      <Route  exact path="/UserList" element = {<UserList/>}/> 
      <Route  exact path="/RegisterUser" element = {<RegisterUser/>}/>
      <Route  exact path="/BasicScreening" element = {<BasicScreening/>}/> 
      <Route  exact path="/BasicInformation" element = {<BasicInformation/>}/>
      <Route  exact path="/Auditory" element = {<Auditory/>}/> 
      <Route  exact path="/BMIS" element = {<BMIS/>}/>
      <Route  exact path="/Dental" element = {<Dental/>}/>   
      <Route  exact path="/FamilyInfo" element = {<FamilyInfo/>}/> 
      <Route  exact path="/Immunisation" element = {<Immunisation/>}/>   
      <Route  exact path="/Psychological" element = {<Psychological/>}/>
      <Route  exact path="/Vision" element = {<Vision/>}/>     
      <Route  exact path="/Vitals" element = {<Vitals/>}/>
      <Route  exact path="/AddNewChild" element = {<AddNewChild/>}/>
      <Route  exact path="/ChildList" element = {<ChildList/>}/>    
      </Routes>
      </Router> 
       
    </div>
  );
}

export default App;
