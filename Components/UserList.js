import './App.css';
import './table.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './Header';
import TemporaryDrawer from './navbar';
import { useNavigate } from "react-router-dom";
import {Container, Row, Col} from 'react-bootstrap';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import {TableBody, IconButton, InputBase,
        TableCell, TableContainer, TableHead, 
        TableRow, Paper, Table, TablePagination, tableCellClasses} from '@mui/material';
//import bootstrap from 'bootstrap';

const data = [
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, UserID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
]

export default function UserList() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

	
    const navLog = useNavigate();
	return (
        <div>
        <TemporaryDrawer/>
        <h4 className='page-head'>User List</h4>
        <div>
            <button type="submit" onClick ={() => {navLog("/RegisterUser");}} className="btn btn-primary add-button">
                Add New User
             </button>
        </div>
        <div className="">
        
        <Paper className="Table-Paper">
        <div  component="form">
        <Row>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
          <div className='Search-div' sm>
            <div className='Search' sm>
              <Row>
              <Col sm={8} className="search-col">
              <InputBase
              placeholder="Search User"
              inputProps={{ 'aria-label': 'search user' }}
              />
               </Col>
               <Col sm={4}>
              <IconButton type="button" aria-label="search" className = 'search-icon'>
              <SearchIcon />
              </IconButton>
              </Col>
              </Row>
              </div>
              </div>
        </Col>
      </Row>
        
        </div>
        
        <Table stickyHeader aria-label="user list table" className="Table">
          <TableHead className='head-table'>
            <TableRow>
              <TableCell >Sr. No</TableCell>
              <TableCell >User ID</TableCell>
              <TableCell>User Name</TableCell>
              <TableCell>Mobile No</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Group</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (<TableRow key={row.UserID}>
            <TableCell className='col-table'>{row.SrNo}</TableCell>
            <TableCell className='col-table'>{row.UserID}</TableCell>
            <TableCell className='col-table'>{row.UserName}</TableCell>
            <TableCell className='col-table'>{row.MobileNo}</TableCell>
            <TableCell className='col-table'>{row.Email}</TableCell>
            <TableCell className='col-table'>{row.Group}</TableCell>
            <TableCell className='col-table'>{row.Status}</TableCell>
            <TableCell className='col-table'>
            <EditIcon className="icon-edit"/>
            <VisibilityIcon className="icon-view"/>
            <DeleteIcon className="icon-delete"/>
            </TableCell>
          </TableRow>))}
            
          </TableBody>
        </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100, 500]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
        </div>
        </div>
    );
    }
