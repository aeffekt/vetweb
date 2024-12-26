import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
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
  Popper,
  Paper,
  Grow,
  MenuList,
  MenuItem,
  ClickAwayListener,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import serviciosData from '../data/servicios.json';

const navItems = [
  { label: 'Página principal', path: '/' },
  { label: 'Servicios', path: '/servicios', hasDropdown: true },
  { label: 'Quienes Somos', path: '/QuienesSomos' },
  { label: 'Preguntas Frecuentes', path: '/preguntas-frecuentes' },
  { label: 'Contacto', path: '/Contacto' },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleServiceClick = () => {
    navigate('/servicios');
    handlePopoverClose();
    setMobileOpen(false);
  };

  const isActive = (path) => location.pathname === path;

  const open = Boolean(anchorEl);

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
                borderBottom: isActive(item.path) ? '2px solid #ffffff' : 'none',
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
                onMouseEnter={item.hasDropdown ? handlePopoverOpen : null}
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

      <Popper
        open={open}
        anchorEl={anchorEl}
        role={undefined}
        transition
        disablePortal
        placement="bottom-start"
        style={{ zIndex: 1300 }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper sx={{
              backgroundColor: 'primary.main',
              backdropFilter: 'blur(5px)',
            }}>
              <ClickAwayListener onClickAway={handlePopoverClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  sx={{
                    '& .MuiMenuItem-root': {
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      },
                    },
                  }}
                >
                  {serviciosData.rows.map((servicio) => (
                    <MenuItem
                      key={servicio.title}
                      onClick={() => handleServiceClick()}
                    >
                      {servicio.title}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
}

export default Navbar;


