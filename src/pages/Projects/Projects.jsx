import React from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system'
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

const Projects = () => {
    return (
        <Box
        mt={10}
        sx={{background: "gray",Height: 100}}>
        <Container className="project-header">
            <p class="the">The</p>
            <h2 class="dod-rl wfd">Learning <span class="dod-of">As a</span> DEVELOPER</h2> 
        </Container>
        <Container >
            <div className='project-title'>
            <h1>My Projects</h1>
            <p>Learning is <span>Fun</span>damental</p>
            </div>
            <section>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid xs={2} sm={4} md={4} key={index}>
                        <Card
                        elevation={8}
                        sx={{maxWidth: 450,height:300,backgroundColor:"none"}}>Project Item </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
            </section>
        </Container>
        </Box>
    )
}

export default Projects