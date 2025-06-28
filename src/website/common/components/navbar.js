import { useState } from 'react';
import {
  AppBar, Box, Container, IconButton, Menu, MenuItem,
  Toolbar, Typography, Drawer, List, ListItem, ListItemText,
  Button
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { NavDonateButton, NavItemButton } from '../../../styles/styleButton';
import { StyleStackCenter } from '../../../styles/typographyStyle';
import logo from '../../../assets/images/logo.png';
import LogoComponent from './logoComponent';

const pages = [
  {
    name: "Home",
    path: '/',
    subpages: []
  },
  {
    name: "Projects",
    subpages: [
      // { label: "Ongoing", path: "/projects/ongoing" },
      // { label: "Completed", path: "/projects/completed" },
      // { label: "Upcoming", path: "/projects/upcoming" }
    ]
  },
  {
    name: "Events",
    path: '/events',
    subpages: []
  },
  {
    name: "Career",
    path: 'career',
    subpages: []
  },
  {
    name: "About",
    subpages: [
      { label: "Our Mission", path: "/about/mission" },
      { label: "Our values", path: "/about/value" },
      { label: "Our Team", path: "/about/team" },
      { label: "Contact Us", path: "/about/contact" }
    ]
  },
  {
    name: "Contact Us",
    path: 'contactus',
    subpages: []
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElSubNav, setAnchorElSubNav] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Box>
      {/* Desktop AppBar */}
      <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'primary.contrastText' }}>
        <Container maxWidth="full" sx={{ bgcolor: 'primary.main' }}>
          <StyleStackCenter
            sx={{
              padding: '0.2rem',
              gap: { xs: 1, sm: 1 },

            }}
          >
            <Typography color='primary.contrastText' sx={{ typography: { xs: 'caption', sm: 'body2' } }} >
              🌟 Support Our Cause, Change Lives 🎉
            </Typography>
            {/* Donate Button */}
            <NavDonateButton sx={{ p: '1px 8px', whiteSpace: 'nowrap' }} onClick={() => navigate('/donate')}>
              Donate Now
            </NavDonateButton>

          </StyleStackCenter>
        </Container>
        <Container maxWidth="xl" sx={{ bgcolor: 'primary.contrastText' }}>
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Logo and Name */}
            <Typography variant="h6" fontWeight={'bold'} color='primary.main' component="div" sx={{ display: 'flex', alignItems: 'center' }}>
              <LogoComponent src={logo} />
              The Help Sansthan
            </Typography>

            {/* Desktop Links */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => {
                const isOpen = anchorElSubNav?.name === page.name;

                return (
                  <Box
                    key={page.name}
                    sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 10, height: '4.2rem' }}
                    onMouseEnter={(e) => setAnchorElSubNav({ anchor: e.currentTarget, name: page.name })}
                    onMouseLeave={() => setAnchorElSubNav(null)}
                  >
                    <NavItemButton>
                      {page.name}
                    </NavItemButton>
                    {/* Dropdown Menu */}
                    {page.subpages.length ? (
                      <Menu
                        anchorEl={anchorElSubNav?.anchor}
                        open={isOpen}
                        onClose={() => setAnchorElSubNav(null)}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                        MenuListProps={{
                          onMouseEnter: () => setAnchorElSubNav(anchorElSubNav),
                          onMouseLeave: () => setAnchorElSubNav(null),
                        }}
                      >
                        {page.subpages.map((subpage, index) => (
                          <MenuItem
                            key={index}
                            onClick={() => {
                              navigate(subpage.path);
                              setAnchorElSubNav(null); // Close menu after navigation
                            }}
                          >
                            {subpage.label}
                          </MenuItem>
                        ))}
                      </Menu>
                    ) : ''}
                  </Box>
                );
              })}
            </Box>
            {/* Login/Sign-up Buttons */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button onClick={() => navigate('/login')}>Login</Button>
              <Button variant="outlined" onClick={() => navigate('/signup')}>Sign Up</Button>
            </Box>

            {/* Mobile Menu */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Drawer for Mobile View */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List>
          {pages.map((page) => (
            <ListItem key={page.name} button onClick={() => navigate(page.path)}>
              <ListItemText primary={page.name} />
            </ListItem>
          ))}
          <ListItem button onClick={() => navigate('/login')}>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button onClick={() => navigate('/signup')}>
            <ListItemText primary="Sign Up" />
          </ListItem>
        </List>
      </Drawer>
    </Box >
  );
};

export default Navbar;