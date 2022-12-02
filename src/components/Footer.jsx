import React from 'react'
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';

const Footer = () => {
    return (
        <Paper sx={{background:"none", marginTop: 'calc(100vh + 60px)',
        width: '100%',
        position: 'fixed',
        bottom: 0
        }} component="footer" square variant="outlined">
            <hr/>
            <Container>
                <div>
                <p>&copy; - Designed and Developed by Timothy Singleton</p>
                <p>Built with React and styled with Material UI </p>
                </div>
            </Container>
        </Paper>
    )
}

export default Footer