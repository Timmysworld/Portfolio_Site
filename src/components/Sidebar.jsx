import React from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';

const Sidebar = () => {
    const drawerWidth = 240;
    return(
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
            >
            <Toolbar />

            </Drawer>
        </Box>
    )
}
    

export default Sidebar