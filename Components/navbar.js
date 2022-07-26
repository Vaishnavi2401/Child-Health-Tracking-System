import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import bootstrap from 'bootstrap';
import './App.css';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SvgIcon from '@mui/material/SvgIcon';

const TemporaryDrawer = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
              <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Children List" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Screening" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Hospital List" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Child Report" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Report" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />  
    </Box> 
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          {/* <Button onClick={toggleDrawer(anchor, true)} id="nav">{anchor}</Button> */}
          <IconButton onClick={toggleDrawer(anchor, true)} id="nav">
          <SvgIcon sx={{ fontSize:30 }}component={MenuIcon} inheritViewBox />
            </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
export default TemporaryDrawer;