import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const pages = ['About', 'Projects','Blogs','Contact'];

function DrawerAppBar(props) {
    
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
};

const drawer = (

    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
    <Typography variant="h6" sx={{ my: 2 }}>
        TIMMY'S WORLD 
    </Typography>
    <Divider />
    <List>
        {pages.map((item) => (
            <ListItem
            key={item} disablePadding
            onClick={() =>(item)} >
                <ListItemButton 
                sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
                </ListItemButton>
            </ListItem>
        ))}
        </List>
    </Box>
    );
// END DRAWER(MOBILE VIEW)

const container = window !== undefined ? () => window().document.body : undefined;


return (
    <Box sx={{ display: 'flex' }}>
    <AppBar component="nav" sx={{ background: "none" }} elevation={0}>
        <Toolbar> {/* Tool bar give appbar its spacing  */}
            <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
        >
            <MenuIcon sx={{color: 'black'}} /> {/* hamburger icon */}
            </IconButton>
            <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold',  display: { xs: 'none', sm: 'block' } }}
        >
            <Link className="nav-link" to={'/'}
            >
            TIMMY'S WORLD
            </Link>
        </Typography>
        {/* handles the collapse of the navItems */}
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {pages.map((item) => (
            <Button 
            key={item} 
            // onClick={() => navigate(item.route)}
            sx={{ color: 'black' }}>
            <Link className="nav-link" to={`/${item}`}>
            {item}
            </Link>
            {/* {item} */}
            </Button>
            ))}
        </Box> {/* END: handles the collapse of the navItems */}
        </Toolbar>
    </AppBar>

    {/*MOBILE VIEW */}
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
            display:{ xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
        >
        {drawer}
        </Drawer>
    </Box>
    </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
    window: PropTypes.func,
};

export default DrawerAppBar;
















