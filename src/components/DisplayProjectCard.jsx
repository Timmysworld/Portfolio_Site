import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';


function DisplayProjectCard(props) {
    return (
    <Card elevation={0}
            sx={{ maxWidth: 645, 
            backgroundColor: "transparent", p:4 }}>
            <CardActionArea>
            <CardMedia
                component="img"
                title="My Next Promo App landing page"
                height="240"
                width="440"
                image="src/static/images/MyNextPromoApp.png"
                alt="Home page of My Next Promo App"
                
        />
            </CardActionArea>
        <CardActions sx={{ml: 12}}>
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
