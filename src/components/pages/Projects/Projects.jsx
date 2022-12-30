import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system'
import MainLayout from '../../layouts/MainLayout'

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const Projects = () => {

    const [title, setTitle] = useState("Test Title")
    const [subTitle, setSubtitle] = useState("Lorem ipsss yyyyyyyy")
    const [summary, setSummary] = useState("Lorem daskhjfgsdijgdklsgfjioejasdklnvirjgsdjfgdsgjiopr..")

    return (
        <Box
        mt={10}
        sx={{Height: 100}}>
        <Container className="project-header">
            <p class="the">The</p>
            <h2 class="dod-rl wfd">Learning <span class="dod-of">As a</span> DEVELOPER</h2> 
        </Container>
        <MainLayout title={title}/>
        </Box>
    )
}

export default Projects

//things to think about: how to show different design on card from mainlayout, my thought process is to add more state but locally just change elements in the card but HOW? 