import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import BodyContent from './BodyContent';
import { Table } from './Table';
import { BodyContent2 } from './BodyContent2';
import {NavigationBar} from './Navigationbar';

function App() {
  return (
      <div>
        <AppHeader/>
        <BodyContent2/>
        <NavigationBar/>
        <AppFooter company="Group-3" year="2022"/>
      </div>
  )}

export default App;
