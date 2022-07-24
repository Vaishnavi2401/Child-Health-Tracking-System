import logo from './logo.svg';
import './App.css';
import FirstComponent from './FirstComponent';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import BodyContent from './BodyContent';
import { Table } from './Table';
// import {SwipeableTemporaryDrawer} from './Navigationbar';

function App() {
  return (
      <div>
        <AppHeader/>
        {/* <BodyContent/> */}
        <Navigationbar>
        <AppFooter company="Group-3" year="2022"/>
      </div>
  )}

export default App;
