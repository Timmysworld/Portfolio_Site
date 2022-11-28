import { Container } from '@mui/system'
import React from 'react'
import Box from '@mui/material/Box';

const Blog = () => {
    return (
        <Box
            mt={10}
            sx={{background: "gray"}}>
            <Container className="blog-header">
                <p class="the">The</p>
                <h2 class="dod-rl wfd">Writtings <span class="dod-of">from a</span> DEVELOPER</h2> 
            </Container>
        </Box>
    )
}

export default Blog