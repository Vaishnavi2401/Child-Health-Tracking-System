import './App.css';
import './table.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Header from './Header';
import TemporaryDrawer from './navbar';
import { useNavigate } from "react-router-dom";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Redirect,
  } from "react-router-dom";
//import Table from 'react-bootstrap/Table';
import { styled } from '@mui/material/styles';
//import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TablePagination from '@mui/material/TablePagination';

//import bootstrap from 'bootstrap';

const columns = [
    { id: 'SrNo', label: 'Sr No.', minWidth: 50 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
      id: 'population',
      label: 'Population',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'size',
      label: 'Size\u00a0(km\u00b2)',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'density',
      label: 'Density',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(2),
    },
  ];
  
  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }
  
  const rows = [
    createData(1,'India', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
  ];

const data = [
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },
{ SrNo: 1, ClgRefID: "EMP-1", UserName: "Akash", MobileNo: 9730193648, Email: "agthakur5@gmail.com", Group: "UG-Admin", Status: "active", Actions: 1 },

]

export default function ChildList() {

    const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
            <button type="submit" onClick ={() => {navLog("/AddNewChild");}} className="btn btn-primary add-button">
                Add New Child
             </button>
        </div>
        <div className="">
        
        <Paper className="Table">
        
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} className="Table-Row">
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100, 500]}
        component="div"
        count={rows.length}
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
