import React from 'react'
import { Container } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';



const Footer = () => {
    
    return (
                <Container className="footer"
                maxWidth="xl"
                sx={{
                    display:"flex",justifyContent:"space-between",alignItems: "center",
                }}>
                <div>
                <p>&copy; - Designed and Developed by Timothy Singleton</p>
                </div>

                <div>
                <p>Built with<span> React</span> and styled with <span>Material UI</span> </p>
                
                <div className="icons">
                <GitHubIcon/>
                <LinkedInIcon/>
                <EmailIcon/>
                </div>
                </div>

                </Container>


        
        
    )
}

export default Footer