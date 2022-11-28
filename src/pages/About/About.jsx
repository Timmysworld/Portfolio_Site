import React from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
// import DisplayProjectCard from './components/DisplayProjectCard';


const About = () => {
    return (
        <>
        <Box 
            mt={10}
            sx={{background: "gray", display: "flex",  flexDirection: "column"}}>
            <Container className="about-header">
            <p class="the">The</p>
            <h2 class="dod-rl">Development <span class="dod-of">of a</span> DEVELOPER</h2> 
            </Container>
            <Grid Container spacing={8}
                className="skill-card"
                sx={{display:"flex",
                p:5 }}>
                <Grid Item xs={8} sm={12}>
                <Card
                elevation={4}
                sx={{background:"none",
                p:2,maxWidth: 450}}>
                <h3 class="title">FRONT END DEV</h3>
                <h3 class="sub-heading">Lorem. </h3>
                <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, minima.</p>
                </Card>
                </Grid>
                <Grid Item xs={8} sm={12}>
                <Card elevation={4}
                sx={{background:"none",
                p:2, maxWidth: 450}}>
                <h3 class="title">MOBILE DEV</h3>
                <h3 class="sub-heading">Lorem.</h3>
                <p class="text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, aperiam.</p>
                </Card>
                </Grid>
                <Grid Item xs={8} sm={12}>
                <Card elevation={4}
                sx={{background:"none",p:2,maxWidth: 450}}>
                <h3 class="title">BACK END DEV</h3>
                <h3 class="sub-heading">Lorem.
                </h3>
                <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, voluptatibus?.</p>
                </Card>
                </Grid>
            </Grid>
            <Box>
                <div class="current-project">
                    <div class="project">
                        <h3 class="project-heading">Current Project</h3>
                        <p class="project-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus hic at provident dolore cumque!</p>
                    </div> 
                    {/* <DisplayProjectCard/> */}
                </div>
            </Box>
            {/* CREATE A MYSTORY COMPONENT TO PASS RIGHT HERE */}

        </Box>
        
    </>
    )
}

export default About