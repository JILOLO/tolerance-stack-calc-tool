import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tolerance Stack Calculator
        </Typography>
        <Button color="inherit" component={Link} to="/">Trees</Button>
        <Button color="inherit" component={Link} to="/editor">New Tree</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 