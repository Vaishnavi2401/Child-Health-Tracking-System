import './App.css';
import './New.css';
import React from 'react';
import TemporaryDrawer from './navbar';
import ScreeningNav from './ScreeningNav';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';



const Psychological = () => {
  return (
    <div>
    
    <TemporaryDrawer/>
    <ScreeningNav/>
    
    <div>
    <h4 className='page-head'>Psychological Screening</h4>
    <Paper className="form-add">
        <Box
       component="form"
         sx={{
        '& > :not(style)': { m: 2, width: '125ch' },
         }}
           noValidate
          autoComplete="off">
           <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Difficulty In Reading</FormLabel>
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
        '& > :not(style)': { m: 2, width: '125ch' },
         }}
           noValidate
          autoComplete="off">
           <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Difficulty In Writing</FormLabel>
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
        '& > :not(style)': { m: 2, width: '125ch' },
         }}
           noValidate
          autoComplete="off">
           <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Hyper Reactive Behaviour</FormLabel>
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
        '& > :not(style)': { m: 2, width: '125ch' },
         }}
           noValidate
          autoComplete="off">
           <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Aggresive Behaviour</FormLabel>
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
        '& > :not(style)': { m: 2, width: '125ch' },
         }}
           noValidate
          autoComplete="off">
           <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Poor Mixing With Peers</FormLabel>
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
        '& > :not(style)': { m: 2, width: '125ch' },
         }}
           noValidate
          autoComplete="off">
           <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Poor Eye Contact</FormLabel>
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
        '& > :not(style)': { m: 2, width: '125ch' },
         }}
           noValidate
          autoComplete="off">
           <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Scholostic Backwardness</FormLabel>
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
        '& > :not(style)': { m: 2, width: '130ch' },
         }}
           noValidate
          autoComplete="off">

      <TextField id="outlined-basic" label="Any Other *" variant="outlined" />
      </Box>
      </Paper>
          
    </div>
    </div>
  );
}

export default Psychological;