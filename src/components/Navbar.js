import React from 'react';
import { AppBar, Button, Toolbar } from '@mui/material';
import { Shuffle } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar
      position="absolute"
      color="inherit"
      elevation={0}
      sx={{
        position: 'relative',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button variant="text" color="inherit" endIcon={<Shuffle />}>
          Random
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
