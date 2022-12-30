import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box } from '@mui/system';

const MyStory = () => {
    return (
        <Box className="myStoryContainer"
        sx={{display: "flex", mb:5}}>
        <div className='myStoryBox'>
        <Card elevation={0}
            sx={{ maxWidth: 645, 
            backgroundColor: "transparent",p:4 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="240"
                width="440"
                image= <svg style={{width:720, height: 400 }}xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 720x400" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#868e96"></rect>
                <text x="50%" y="50%" dy=".3em" fill="#dee2e6" >Replace Me!</text>
                </svg>
        />
            </CardActionArea>
        <CardActions sx={{ml: 10}}>
        <a href="https://www.linkedin.com/in/timothy-singleton/"><Button size="small" color="primary">
            LinkedIn 
        </Button></a> |
        <a href="mailto:txsingleton89@gmail.com"><Button size="small" color="primary">
            Gmail  
        </Button></a>
        </CardActions>
    </Card>
        <div class="myStory">
            <h3 class="myStory-heading">Welcome to my World, well the thoughts in my head lol </h3>
            <p class="myStory-info">Most people have unique stories at how the discovered their passions.  Well minds happen because of curiousity. It true curiousity kills the cat SIKE, it woke her up. I'm veteran, a firefighter and now a Software Developer.  I bring clear clean cut, structured, and fun designs to all my projects.</p>
        </div> 
    </div>
    </Box>
    )
}

export default MyStory