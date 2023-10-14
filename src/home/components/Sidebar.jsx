import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CottageIcon from '@mui/icons-material/Cottage'; // Icono de casa
import MenuBookIcon from '@mui/icons-material/MenuBook'; // Icono de menu
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'; // Icono de notificaciones
import SettingsIcon from '@mui/icons-material/Settings'; // Icono de configuraciones
import LogoutIcon from '@mui/icons-material/Logout'; // Icono de logout
import HistoryIcon from '@mui/icons-material/History'; // Icono de historial
import PlaceIcon from '@mui/icons-material/Place'; // Icono de lugar
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"; // Icono de carrito 
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../store/auth/thunks";
import { Link, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { Badge } from "@mui/material";
import Button from "@mui/material/Button";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LoginModal from '../../auth/LoginModal';
import SignUpModal from "../../auth/SignUpModal";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),

    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,

  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: 'transparent', // Agregamos el color de
  boxShadow: 'none',
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft({ children }) {

  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpenSignUp(false);
  };
  const handleCloseLogin = () => setOpenLogin(false);

  const [openSignUp, setOpenSignUp] = useState(false);
  const handleOpenSignUp = () => {
    setOpenSignUp(true);
    setOpenLogin(false);
  };
  const handleCloseSignUp = () => setOpenSignUp(false);


  /*  */
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    dispatch(signOut());
    navigate("/");
  };
  /*  */


  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="black"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon fontSize="large" color='black' />
          </IconButton>
          <Link to="/" underline="none" style={{ textDecoration: 'none' }} aria-label="Ir a la página de inicio">
            <Typography variant="h4" noWrap component="div" className='title' role="heading">
              {isSmallScreen ? 'The kk' : 'The krusty krab'}
            </Typography>
          </Link>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', marginLeft: '25px' }}>
            <Link to="/products" style={{ textDecoration: 'none' }}>
              <Button variant="contained" className='YellowButton'>
                Menu
              </Button>
            </Link>
          </Box>
          {/*           {auth && auth.role == 1 && (
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Link to="/users">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">USERS</Typography>
                </MenuItem>
              </Link>
              <Link to="/products">
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">PRODUCTS</Typography>
                </MenuItem>
              </Link>
            </Box >
          )} */}
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
            {!(auth && auth.role == 1) && (
              <Box>
                <Tooltip title="Open Maps">
                  <Link to="/place">
                    <Badge color="error">
                      <IconButton style={{ color: "black" }}>
                        <PlaceIcon />
                      </IconButton>
                    </Badge>
                  </Link>
                </Tooltip>
                <Tooltip title="Open cart">
                  <Link to="/cart">
                    <Badge badgeContent={cart.length} color="warning">
                      <IconButton style={{ color: "black" }}>
                        <ShoppingCartRoundedIcon />
                      </IconButton>
                    </Badge>
                  </Link>
                </Tooltip>
                <Tooltip title="Notifications">
                  <Link to="/notifications">
                    <Badge color="error">
                      <IconButton style={{ color: "black" }}>
                        <NotificationsActiveIcon />
                      </IconButton>
                    </Badge>
                  </Link>
                </Tooltip>
              </Box>
            )}
            {auth ? (
              <Box sx={{ flexGrow: 0 }}>
                <div style={{ display: "flex" }}>
                  <Stack direction="row" spacing={2}>
                    <Button color="inherit" onClick={handleOpenUserMenu} sx={{ color: 'black' }}>
                      <Avatar alt="Remy Sharp" src="https://www.spongebobshop.com/cdn/shop/products/Viacom_Spongebob_SubTotePRTGENSOG16_00013_RO_grande.jpg?v=1581618420" />
                    </Button>
                  </Stack>
                </div>

                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={logout}>
                    <Typography textAlign="center" sx={{ color: 'black' }}>Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <div style={{ display: "flex" }}>
                <Stack direction="row" spacing={2}>
                  <Button color="inherit" onClick={handleOpenLogin} sx={{ color: 'black' }}>
                    <Avatar alt="Remy Sharp" src="https://www.spongebobshop.com/cdn/shop/products/Viacom_Spongebob_SubTotePRTGENSOG16_00013_RO_grande.jpg?v=1581618420" />
                  </Button>
                </Stack>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: 'gray', // Agregamos el color de fondo negro
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img src="https://media.canva.com/1/image-resize/1/200_200_100_PNG_F/czM6Ly9tZWRpYS1wcml2YXRlLmNhbnZhLmNvbS9yUHEwZy9NQUZ0UTNyUHEwZy8xL3AucG5n?osig=AAAAAAAAAAAAAAAAAAAAAN3jRs34MB2QurK-GULc9EPSyEGZ_mg4rQxo49-2NMQ5&exp=1696990483&x-canva-quality=thumbnail&csig=AAAAAAAAAAAAAAAAAAAAADREtkxyIsEO6Vy-Epy26UmB4vxoCDjUqcl4OdpFjCxg" alt="logo" style={{ width: '150px' }} />
        </Box>
        <Divider />
        <List>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                  <CottageIcon />
                </ListItemIcon>
                <ListItemText primary={'Home'} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/menu" style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary={'Menu'} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/notifications" style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                  <NotificationsActiveIcon />
                </ListItemIcon>
                <ListItemText primary={'Notificaciones'} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/settings" style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary={'Configuración'} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/logout" style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary={'Salir'} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/history" style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                  <HistoryIcon />
                </ListItemIcon>
                <ListItemText primary={'Historial'} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          </Link>
          <Link to="/place" style={{ textDecoration: 'none' }}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon sx={{ color: 'white' }}>
                  <PlaceIcon />
                </ListItemIcon>
                <ListItemText primary={'Lugar'} sx={{ color: 'white' }} />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
      <Main open={open}>
        <div style={{ marginTop: '25px' }}>
          {children}
        </div>
      </Main>
      <LoginModal
        openLogin={openLogin}
        handleOpenSignUp={handleOpenSignUp}
        handleCloseLogin={handleCloseLogin}
      />
      <SignUpModal
        openSignUp={openSignUp}
        handleOpenLogin={handleOpenLogin}
        handleCloseSignUp={handleCloseSignUp}
      />
    </Box>

  );
}


