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
import {TableBody, IconButton, InputBase, TextField, MenuItem, FormControl,
        TableCell, TableContainer, TableHead, Box, InputLabel, Select,
        TableRow, Paper, Table, TablePagination, tableCellClasses} from '@mui/material';
//import bootstrap from 'bootstrap';

const data = [
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  { SrNo: 1, ChildName: "ABC", ChildAge: 13, Block: "Pune", SchoolName: "K.V. NDA Pune", AddedBy: "UG-Admin", AddedDate: "12-03-2022", Actions: 1 },
  ]

export default function ChildList() {
  const [Block, setBlock] = React.useState('');

  const handleBlock = (event) => {
    setBlock(event.target.value);
  };

  const [School, setSchool] = React.useState('');

  const handleSchool = (event) => {
    setSchool(event.target.value);
  };

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
        <h4 className='page-head'>Child List</h4>
        <div>
            <button type="submit" onClick ={() => {navLog("/AddNewChild");}} className="btn btn-primary add-button">
                Add New Child
             </button>
        </div>
        <div>
        <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
         }}
           noValidate
          autoComplete="off"
          >
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select Tehsil</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={Block}
              label="Select Block"
              onChange={handleBlock}
              >
              <MenuItem value={10}>Ambegaon</MenuItem>
              <MenuItem value={20}>Baramati</MenuItem>
              <MenuItem value={30}>Bhor</MenuItem>
              <MenuItem value={40}>Daund</MenuItem>
              <MenuItem value={50}>Haveli</MenuItem>
              <MenuItem value={60}>Indapur</MenuItem>
              <MenuItem value={70}>Junnar</MenuItem>
              <MenuItem value={80}>Khed</MenuItem>
              <MenuItem value={90}>Maval</MenuItem>
              <MenuItem value={100}>Mulshi</MenuItem>
              <MenuItem value={110}>Pune</MenuItem>
              <MenuItem value={120}>Purandar</MenuItem>
              <MenuItem value={130}>Shirur</MenuItem>
              <MenuItem value={140}>Velhe</MenuItem>
              </Select>
          </FormControl>
          
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Select School</InputLabel>
              <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={School}
              label="Select School"
              onChange={handleSchool}
              >
              <MenuItem value={10}>Admin</MenuItem>
              <MenuItem value={20}>CHO</MenuItem>
              <MenuItem value={30}>Expert</MenuItem>
              </Select>
          </FormControl>
          <button type="submit" onClick ={() => {}} className="btn-primary-child-search">
                Search
          </button>

          <button type="submit" onClick ={() => {}} className="btn-primary-child-search">
                Search Child by ID
          </button>
          </Box>
          
          </Paper>
        </div>
        <div className="">
        <div  component="form">
        <Row>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
        </Col>
        <Col xs={6} md={4}>
        </Col>
        </Row>
        </div>
        <Paper className="Table-Paper">
        <Table stickyHeader aria-label="user list table" className="Table">
          <TableHead className='head-table'>
            <TableRow>
              <TableCell >Sr. No</TableCell>
              <TableCell >Child Name</TableCell>
              <TableCell>Child Age</TableCell>
              <TableCell>Block</TableCell>
              <TableCell>Bit</TableCell>
              <TableCell>School Name</TableCell>
              <TableCell>Added By</TableCell>
              <TableCell>Added Date</TableCell>
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