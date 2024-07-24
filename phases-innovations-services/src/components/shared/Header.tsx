import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, useTheme } from '@mui/material/styles';

const HeaderRoot = styled('div')(({ theme }) => ({
  flexGrow: 1,
}));

const NavLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexGrow: 1,
  width: 'min-content',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const AuthButtons = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

const DrawerList = styled('div')({
  width: 250,
});

const Header: React.FC = () => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <HeaderRoot>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            QR Code
          </Typography>
          <NavLinks>
            <Button color="inherit" component={Link} to="/">
              Qr codes
            </Button>
            <Button color="inherit"component={Link} to="/api">
              API
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact Us
            </Button>
            <Button color="inherit" component={Link} to="/faq">
              FAQ
            </Button>
            <Button color="inherit" component={Link} to="/plans">
              Plans
            </Button>
            <Button color="inherit" component={Link} to="/blog">
              Blog
            </Button>
          </NavLinks>
          <AuthButtons>
            <Button
              variant="contained"
              component={Link}
              to="/register"
              style={{ backgroundColor: 'green', marginRight: '10px' }}
            >
              Sign UP
            </Button>
            <Button
              variant="contained"
              component={Link}
              to="/login"
              style={{ backgroundColor: 'green' }}
            >
              Login
            </Button>
          </AuthButtons>
          <MenuButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </MenuButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <DrawerList role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemText primary="Qr codes" />
                </ListItem>
                <ListItem button component={Link} to="/api">
                  <ListItemText primary="Api" />
                </ListItem>
                
                <ListItem button component={Link} to="/contact">
                  <ListItemText primary="Contact Us" />
                </ListItem>
                <ListItem button component={Link} to="/faq">
                  <ListItemText primary="FAQ" />
                </ListItem>
                <ListItem button component={Link} to="/plans">
                  <ListItemText primary="Plans" />
                </ListItem>
                <ListItem button component={Link} to="/blog">
                  <ListItemText primary="Blog" />
                </ListItem>
                <Divider />
                <ListItem button component={Link} to="/register">
                  <ListItemText primary="Sign UP" />
                </ListItem>
                <ListItem button component={Link} to="/login">
                  <ListItemText primary="Login" />
                </ListItem>
              </List>
            </DrawerList>
          </Drawer>
        </Toolbar>
      </AppBar>
    </HeaderRoot>
  );
};

export default Header;
