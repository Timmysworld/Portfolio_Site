import React from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system'

const Contact = () => {
    return (
        <Box
        mt={10}
        sx={{background: "gray"}}>
        <Container className="contact-header">
            <p class="the">The</p>
            <h2 class="dod-rl wfd">Way <span class="dod-of">to hire a </span> DEVELOPER</h2> 
        </Container>
    </Box>
    )
}

export default Contact