import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { label: 'Página principal', path: '/' },
  { label: 'Servicios', path: '/servicios' },
  { label: 'Quienes Somos', path: '/QuienesSomos' },
  { label: 'Tutoriales', path: '/tutoriales' },
  { label: 'Contacto', path: '/Contacto' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        color: 'white',
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: 'center',
                color: 'white',
                border: isActive(item.path) ? '2px solid #dddddd' : 'none',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="static" sx={{ backgroundColor: 'primary.main' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' }, position: 'absolute', left: 0 }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
            {navItems.map((item) => (
              <ListItemButton
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: 'white',
                  backgroundColor: isActive(item.path) ? 'primary.light' : 'primary.main',
                  '&:hover': {
                    backgroundColor: 'primary.dark',
                  },
                }}
              >
                <ListItemText primary={item.label} sx={{ textAlign: 'center' }} />
              </ListItemButton>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            backgroundColor: 'primary.main',
            backdropFilter: 'blur(8px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default Navbar;
