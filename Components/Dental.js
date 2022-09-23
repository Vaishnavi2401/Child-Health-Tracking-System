import './App.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Paper from '@mui/material/Paper';
import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ScreeningNav from './ScreeningNav';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';


const Dental = () => {
  return (
    <div>
    <TemporaryDrawer/>
    <ScreeningNav/>
    <div>
    <h4 className='page-screeninghead'>Dental Checkup</h4>
        <div>
          <Row>
          <Col sm={15}>

        <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '150ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Oral Hygiene</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Fair" control={<Radio />} label="Fair" />
        <FormControlLabel value="Poor" control={<Radio />} label="Poor" />

        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="NAD"
        variant="filled"
        size="small"
      />
      </Stack>

      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '150ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gum Condition</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="Good" control={<Radio />} label="Good" />
        <FormControlLabel value="Fair" control={<Radio />} label="Fair" />
        <FormControlLabel value="Poor" control={<Radio />} label="Poor" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="NAD"
        variant="filled"
        size="small"
      />
      </Stack>

      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '150ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Oral Ulcers</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="NAD"
        variant="filled"
        size="small"
      />
      </Stack>

      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '150ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gum Bleeding</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="NAD"
        variant="filled"
        size="small"
      />
      </Stack>

      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '150ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Discoloration Of Teeth</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="NAD"
        variant="filled"
        size="small"
      />
      </Stack>


      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '150ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Food Impaction</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="NAD"
        variant="filled"
        size="small"
      />
      </Stack>

      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '150ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Carious Teeth</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="NAD"
        variant="filled"
        size="small"
      />
      </Stack>

      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '150ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Extraction Done</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="NAD"
        variant="filled"
        size="small"
      />
      </Stack>

      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '150ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Fluorosis</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
      
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="NAD"
        variant="filled"
        size="small"
      />
      </Stack>

      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '150ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Tooth Brushing Frequency</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="1/day" control={<Radio />} label="1/day" />
        <FormControlLabel value="2/day" control={<Radio />} label="2/day" />
        <FormControlLabel value="1<day" control={<Radio />} label="1<day" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="NAD"
        variant="filled"
        size="small"
      />
      </Stack>

      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '150ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Reffered To Specialist</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
       <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />
        
        <Stack
      component="form"
      sx={{
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="NAD"
        variant="filled"
        size="small"
      />
      </Stack>

      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>

      <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '138ch' },
         }}
           noValidate
          autoComplete="off">

      <TextField id="outlined-basic" label="Comments *" variant="outlined" />
      </Box>
      </Paper>
   
         </Col>
         </Row>
         <button type="submit" className="btn btn-primary save-button">Save</button>
        </div>
        </div>
    </div>
    
  );
}

export default Dental;