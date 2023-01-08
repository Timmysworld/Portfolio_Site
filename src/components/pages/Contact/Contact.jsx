import React from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';


const Contact = () => {
    return (
        <>
        <Box
        mt={10}
        sx={{}}>
        <Container className="contact-header">
            <p class="the">The</p>
            <h2 class="dod-rl wfd">Way <span class="dod-of">to hire a </span> DEVELOPER</h2> 
        </Container>
        </Box>
        <div className="c-form">
        <div className="form-box-title">
            <h2>
                <span className='split-left'>
                <span className='line-left'>LETS</span>
                </span> 
            </h2>
            <h2>
                <span className='split-right'>
                <span className='line-right'>CONNECT</span>
                </span>
            </h2>
        </div>
        <div className="form_box">
            
        </div>
        </div>

        </>
        
    )
}

export default Contact