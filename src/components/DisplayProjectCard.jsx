import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

function DisplayProjectCard(props) {
    return (
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
            View 
        </Button> |
        <Button size="small" color="primary">
            Github 
        </Button>
        </CardActions>
    </Card>
    );
}
export default DisplayProjectCard