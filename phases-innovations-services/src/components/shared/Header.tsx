import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  navLinks: {
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    marginRight: '314px',
  },
  navLink: {
    margin: '0 10px',
    textTransform: 'none',
  },
  authButtons: {
    marginLeft: 'auto',
  },
  authButton: {
    marginLeft: '10px',
    textTransform: 'none',
  },
});

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            QR Code
          </Typography>
          <Box className={classes.navLinks}>

            <Button color="inherit" component={Link} to="/" className={classes.navLink}>
              Qr codes
            </Button>
            <Button color="inherit" className={classes.navLink}>API</Button>
            <Button color="inherit" component={Link} to="/contact" className={classes.navLink}>
              Contact Us
            </Button>
            <Button color="inherit" component={Link} to="/faq" className={classes.navLink}>
              FAQ
            </Button>
            <Button color="inherit" component={Link} to="/plans" className={classes.navLink}>
              Plans
            </Button>

            <Button color="inherit" className={classes.navLink}>Blog</Button>
          </Box>
          <Box className={classes.authButtons}>
            <Button variant="contained" component={Link} to="/register" style={{ backgroundColor: 'green', marginRight: '10px' }} className={classes.authButton}>
              Sign UP
            </Button>
            <Button variant="contained" component={Link} to="/login" style={{ backgroundColor: 'green' }} className={classes.authButton}>
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
