import { Container } from '@mui/system'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import MainLayout from '../../layouts/MainLayout'

const Blog = () => {
    const [title, setTitle] = useState("Test Title")
    const [subTitle, setSubtitle] = useState("Lorem ipsss yyyyyyyy")
    const [summary, setSummary] = useState("Lorem daskhjfgsdijgdklsgfjioejasdklnvirjgsdjfgdsgjiopr..")

        // axios get one blog -> setTitle(res.data.title) setSubtitle(res.data.summary) 

    return (
        <Box
            mt={10}
            sx={{background: "gray"}}>
            <Container className="blog-header">
                <p class="the">The</p>
                <h2 class="dod-rl wfd">Writings <span class="dod-of">from a</span> DEVELOPER</h2> 
            </Container>
            <MainLayout title={title} subTitle={subTitle} summary={summary}/>
        </Box>
    )
}

export default Blog