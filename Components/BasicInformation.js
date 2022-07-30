import './App.css';
import React from 'react';
//import Header from './Header';
import TemporaryDrawer from './navbar';


//import bootstrap from 'bootstrap';
import ScreeningNav from './ScreeningNav';

const BasicInformation = () => {
  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav/>
    
    </div>
  );
}

export default BasicInformation;
