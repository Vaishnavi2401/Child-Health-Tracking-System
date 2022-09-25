import './App.css';
 import './login.css';
// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import Dashboard from './Dashboard';
 import axios from 'axios';
import { Link } from 'react';
// //import bootstrap from 'bootstrap';
import Button from '@mui/material/Button';
// import './Dashboard.js';
import React, { useEffect, useState, toast, Component } from "react"; 
import {Routes,Route} from 'react-router'

import { useNavigate } from "react-router-dom"


class App extends Component {
  render() {
    return (
       <Routes>
           <div className="App">
           
           <Route path='/Dashboard' element={<Dashboard/>} />

           </div>
       </Routes>
   );
  }
}


const Login = ({ setLoginUser}) => {

  // const history = useHistory()
  const navigate = useNavigate();
  
  const [ user, setUser] = useState({
      email:"",
      password:""
  })

  const handleChange1 = e => {
      // const { name, value } = e.target
      setUser({
          ...user,
          email: e.target.value
      })
  }

  const handleChange2 = e => {

    setUser({
        ...user,
        password: e.target.value
    })
}

  const login = (e) => { 
    e.preventDefault();
    console.log(user)
      axios.post("http://localhost:8080/v1/login", user)
      .then(res => {
          console.log(res)
          setUser(res.data.user)

          
          navigate('/Dashboard');
      })
  }

  return (

<div className="container-fluid" id="login">
         <div className="row">
             <div className="col-12 col-sm-6 col-md-3">

         <form className="login-form" onSubmit={login}>
            <div className="mb-3">
               <label htmlFor="inputPhone" className="form-label">Email Id</label>
               <input type="text" className="form-control" id="inputPhone" aria-describedby="emailHelp" onChange={handleChange1} placeholder="Enter your Email" required></input>

             </div>
             <div className="mb-3">
             <label htmlFor="loginPassword" className="form-label">Password</label>
               <input type="password"  className="form-control" id="loginPassword" onChange={handleChange2} placeholder="Enter your Password" required></input>

             </div>
             <div className="mb-3 form-check">
               <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
               <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
             </div>
         
              <button type="submit" className="btn btn-primary login-button">
                 Login
              </button> 
          
             
           </form>
         </div>
     </div>
     </div>
  );
}

export default Login;



// //  import * as React from 'react';
//  import Avatar from '@mui/material/Avatar';
//  import Button from '@mui/material/Button';
//  import CssBaseline from '@mui/material/CssBaseline';
//  import TextField from '@mui/material/TextField';
//  import FormControlLabel from '@mui/material/FormControlLabel';
//  import Checkbox from '@mui/material/Checkbox';
//  import Link from '@mui/material/Link';
//  import Grid from '@mui/material/Grid';
//  import Box from '@mui/material/Box';
//  import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//  import Typography from '@mui/material/Typography';
//  import Container from '@mui/material/Container';
//  import { createTheme, ThemeProvider } from '@mui/material/styles';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="http://localhost:8080/v1/userlist">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function Login() {

//   axios.post("http://localhost:8080/v1/login")

//   const [ user, setUser] = useState({
//            email:"",
//            password:""
//        })

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//             <LockOutlinedIcon />
//           </Avatar>
//           <Typography component="h1" variant="h5">
//             Sign in
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <FormControlLabel
//               control={<Checkbox value="remember" color="primary" />}
//               label="Remember me"
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//             >
//               Sign In
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="#" variant="body2">
//                   Forgot password?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="#" variant="body2">
//                   {"Don't have an account? Sign Up"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//         <Copyright sx={{ mt: 8, mb: 4 }} />
//       </Container>
//     </ThemeProvider>
//   );
// }

// // export default Login;




// import React, {useState} from "react"
// import "./login.css"
// import axios from "axios"
// //import { useHistory } from "react-router-dom"

// const Login = ({ setLoginUser}) => {

//     //const history = useHistory()

//     const [ user, setUser] = useState({
//         email:"",
//         password:""
//     })

//     const handleChange = e => {
//         const { name, value } = e.target
//         setUser({
//             ...user,
//             [name]: value
//         })
//     }

//     const login = () => {
//         axios.post("http://localhost:8080/v1/login", user)
//         .then(res => {
//             alert(res.data.message)
//             setLoginUser(res.data.user)
//            // history.push("/")
//         })
//     }

//     return (
//         <div className="login">
//             <h1>Login</h1>
//             <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
//             <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
//             <div >
//               <button  onClick={login} type="submit" className="btn btn-primary login-button">Login</button>
              
//             </div>
//             <div>or</div>
//             {/* <div className="button" onClick={() => history.push("/register")}>Register</div> */}
//         </div>
//     )
// }

// export default Login;