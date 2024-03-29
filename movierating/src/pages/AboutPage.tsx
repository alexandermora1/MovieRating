
import { Box, Fade, Grow, Typography } from '@mui/material'
import React from 'react'


export const AboutPage = () => {



    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <Typography variant="h3" sx={{ marginBottom: 5 }} >Add new movie Page</Typography>

            <Fade in={true} timeout={1000}>
                <Box 
                    sx={{ 
                        width: "50%",
                        height: "50vh",
                        display: "flex", 
                        flexDirection: "column", 
                        justifyContent: "flex-start", 
                        alignItems: "center", 
                        border: "1px solid black", 
                        borderRadius: 2 
                    }}
                >
                    
                    <Typography variant="h5" >Add new movie</Typography>
                    


                    
                </Box>
            </Fade>

        </Box>
    )
}