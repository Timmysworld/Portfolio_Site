import React from 'react'
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import DisplayProjectCard from '../../DisplayProjectCard';
import MyStory from '../../MyStory'

const About = () => {
    return (
        <>
        <Box 
            mt={10}
            sx={{ 
                display: "flex",  
                flexDirection: "column"}}>
            <Container className="about-header">
            <p class="the">The</p>
            <h2 class="dod-rl">Development <span class="dod-of">of a</span> DEVELOPER</h2> 
            </Container>

            <Grid Container spacing={{ sm: 2, md: 3 }}columns={{ sm: 8, md: 12 }} 
                className="skill-card"
                sx={{display:"flex",
                p:1 }}>
                <Grid Item xs={8} sm={12}>
                <Card
                elevation={4}
                sx={{background:"none",
                p:2,maxWidth: 450}}>
                <h3 class="title">FRONT END DEV</h3>
                <h3 class="sub-heading"> HTML5 CSS3 & React Js  </h3>
                <p class="text">Let your ideas be developed with Code. To be displayed for the world to see. </p>
                </Card>
                </Grid>
                <Grid Item xs={8} sm={12}>
                <Card elevation={4}
                sx={{background:"none",
                p:2, maxWidth: 450}}>
                <h3 class="title">MOBILE DEV</h3>
                <h3 class="sub-heading">COMING SOON</h3>
                <p class="text">The Journey to the center of the App Store is being developed.</p>
                </Card>
                </Grid>
                <Grid Item xs={8} sm={12}>
                <Card elevation={4}
                sx={{background:"none",p:2,maxWidth: 450}}>
                <h3 class="title">BACK END DEV</h3>
                <h3 class="sub-heading">Python Flask & SQL 
                </h3>
                <p class="text">Just like a car needs and engine, most apps will need some backend code.  </p>
                </Card>
                </Grid>
            </Grid>
            
            <Box>
                <div class="current-project">
                    <div class="project">
                        <h3 class="project-heading">Current Project</h3>
                        <p class="project-title">My Next Promotion App.</p>
                        <p class="project-info">A full stack CRUD application. This application was developed to assist the DoD firefighter  hiring process as well as  promotions evaluations. It uses data stored to analyze each individual candidate base on skill sets and qualifications. <br></br>
                        <span>Technologies used: </span> <span className='stacks'>Python & Flask, Jinja2, HTML & CSS, Adobe Xd</span></p>
                    </div> 
                    <DisplayProjectCard/>
                </div>
            </Box>
            <MyStory/>
        </Box>   
    </>
    )
}

export default About