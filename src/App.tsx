import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Discover from './components/Discover';
import Photography from './components/Photography';
import Contact from './components/Contact';
import Logo from '/logo.svg'
import Footer from './components/Footer';

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = [{ name: "Home", to: "/happy-travel/" }, { name: "Discover", to: "/happy-travel/discover/" }, { name: "Photography", to: "/happy-travel/photography/" }, { name: "Contact", to: "/happy-travel/contact/" }];

function App(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ py: 2, justifyContent: 'center', display: 'flex' }}>
        <img src={Logo} alt='Happy Travel' />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <Link to={item.to} className='text-orange-500 font-bold w-full'>
              <ListItemButton sx={{ width: "100%" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex-col' }}>
      <CssBaseline />
      <AppBar component="nav" className='h-16'>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { sm: 'block' } }}>
            <img src={Logo} alt='Happy Travel' className='py-4 sm:py-0' />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name}>
                <Link to={item.to} className='text-orange-500 hover:text-orange-600 hover:underline font-bold'>
                  {item.name}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1 }} className={"min-h-screen flex flex-col"}>
        <div className='h-16'></div>
        <Box className="flex-1 flex" >
          <Routes>
            <Route path="/happy-travel/" element={<Home />} />
            <Route path="/happy-travel/discover" element={<Discover />} />
            <Route path="/happy-travel/photography" element={<Photography />} />
            <Route path="/happy-travel/contact" element={<Contact />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Box >
  );
}

export default App;
