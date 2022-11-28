import React from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';

const Footer = () => {
    return (
        <Box>
            <hr/>
            <Container>
                <div>
                <p>&copy; - Designed and Developed by Timothy Singleton</p>
                <p>Built with React and styled with Material UI </p>
                </div>
            </Container>

        </Box>
    )
}

export default Footer