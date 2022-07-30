import './App.css';
import React from 'react';
//import Header from './Header';
import TemporaryDrawer from './navbar';


//import bootstrap from 'bootstrap';
import ScreeningNav from './ScreeningNav';

const BasicScreening = () => {
  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav/>
    
    </div>
  );
}

export default BasicScreening;
