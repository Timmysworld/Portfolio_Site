import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box } from '@mui/system';

const MyStory = () => {
    return (
        <Box
        sx={{display: "flex", ml: 4}}>
        <Card elevation={0}
            sx={{ maxWidth: 645, 
            backgroundColor: "transparent" }}>
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
        <CardActions sx={{ml: 20}}>
        <Button size="small" color="primary">
            LinkedIn 
        </Button> |
        <Button size="small" color="primary">
            Gmail  
        </Button>
        </CardActions>
    </Card>
    <div class="current-project">
        <div class="project">
            <h3 class="project-heading">This Me & I am He </h3>
            <p class="project-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus hic at provident dolore cumque!</p>
        </div> 
    </div>
    </Box>
    )
}

export default MyStory