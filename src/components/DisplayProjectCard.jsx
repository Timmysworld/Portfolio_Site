import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';

function MultiActionAreaCard(props) {
    return (
    <Card elevation={0}
            sx={{ maxWidth: 345, 
            backgroundColor: "transparent" }}>
            <CardActionArea>
            <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
        />
            </CardActionArea>
        <CardActions>
        <Button size="small" color="primary">
            View | Github 
        </Button>
        </CardActions>
    </Card>
    );
}
export default MultiActionAreaCard