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
import ScreeningList from './ScreeningList';
import HealthcardList from './HealthcardList';
import Healthcard from './Healthcard';
import Healthcard_BasicScreening from './Healthcard_BasicScreening';
import Healthcard_BMI from './Healthcard_BMI';
import Healthcard_Vital from './Healthcard_Vital';
import Healthcard_Immunisation from './Healthcard_Immunisation';
import Healthcard_Auditory from './Healthcard_Auditory';
import Healthcard_Dental from './Healthcard_Dental';
import Healthcard_Vision from './Healthcard_Vision';
import Healthcard_Psychological from './Healthcard_Psychological';
import Report from './Report';

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route  exact path="/" element = {<Login/>}/> 
      <Route  exact path="/Dashboard" element = {<Dashboard/>}/> 
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
      <Route  exact path="/ScreeningList" element = {<ScreeningList/>}/> 
      <Route  exact path="/HealthcardList" element = {<HealthcardList/>}/> 
      <Route  exact path="/Healthcard" element = {<Healthcard/>}/> 
      <Route  exact path="/Healthcard_BasicScreening" element = {<Healthcard_BasicScreening/>}/>
      <Route  exact path="/Healthcard_BMI" element = {<Healthcard_BMI/>}/>  
      <Route  exact path="/Healthcard_Vital" element = {<Healthcard_Vital/>}/> 
      <Route  exact path="/Healthcard_Immunisation" element = {<Healthcard_Immunisation/>}/> 
      <Route  exact path="/Healthcard_Auditory" element = {<Healthcard_Auditory/>}/> 
      <Route  exact path="/Healthcard_Dental" element = {<Healthcard_Dental/>}/>
      <Route  exact path="/Healthcard_Vision" element = {<Healthcard_Vision/>}/>
      <Route  exact path="/Healthcard_Psychological" element = {<Healthcard_Psychological/>}/>
      <Route  exact path="/Report" element = {<Report/>}/>      

      </Routes>
      </Router> 
       
    </div>
  );
}

export default App;
