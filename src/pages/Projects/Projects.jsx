import React from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system'

const Projects = () => {
    return (
        <Box
        mt={10}
        sx={{background: "gray"}}>
        <Container className="project-header">
            <p class="the">The</p>
            <h2 class="dod-rl wfd">Learning <span class="dod-of">As a</span> DEVELOPER</h2> 
        </Container>
    </Box>
    )
}

export default Projects