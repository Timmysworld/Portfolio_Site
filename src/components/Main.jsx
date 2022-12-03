import React from 'react'
import Typography from '@mui/material/Typography';
// import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
// import { fontFamily } from '@mui/system';



const Main = () => {
    return (
        <div className='main-wrapper'>
            <div className="welcome-section">
                <Typography variant="h6" sx={{fontWeight:200}}>
                Welcome To
                </Typography>
                <Typography 
                variant="h1" 
                sx={{fontWeight: 900, fontFamily: "poppins"
                }}>
                TIMMY'S WORLD
                </Typography>
            <hr/>
            <Typography 
            variant='h4'
            sx={{fontWeight: 200}}>
            FULL STACK WEB DEVELOPER
            </Typography>
            </div>
            <div className="quote-of-the-day">
                <Typography
                variant='h6'
                sx={{fontWeight:300, fontFamily:"Montserrat"}}
                >
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, explicabo".
                </Typography>
            </div>
        </div>

    )
}

export default Main