import './App.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ScreeningNav from './ScreeningNav';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

const Vision = () => {
  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav/>
    
    <div>
    <h4 className='page-screeninghead'>Vision Screening</h4>
    <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '138ch' },
         }}
           noValidate
          autoComplete="off">

      <FormControl component="fieldset">
      <FormLabel component="legend">Eye</FormLabel>
      <FormGroup aria-label="absolute" row>
       
        <FormControlLabel
          value="Exophthalmos"
          control={<Checkbox />}
          label="Exophthalmos"
          labelPlacement="end"
        />
        <FormControlLabel
          value=" Squint"
          control={<Checkbox />}
          label=" Squint"
          labelPlacement="end"
        />
        <FormControlLabel
          value=" Tagmus"
          control={<Checkbox />}
          label=" Tagmus"
          labelPlacement="end"
        />
        <FormControlLabel
          value="Other"
          control={<Checkbox />}
          label="Other"
          labelPlacement="end"
        />
      </FormGroup>
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

      <TextField id="outlined-basic" label="Comments if any *" variant="outlined" />
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

      <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Reffered To Specialist *</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group">
        <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
        <FormControlLabel value="No" control={<Radio />} label="No" />

        
      </RadioGroup>
      </FormControl>
      </Box>
      </Paper>
    
      <button type="submit" className="btn btn-primary save-button">Save</button>
    </div>

    </div>
  );
}

export default Vision;