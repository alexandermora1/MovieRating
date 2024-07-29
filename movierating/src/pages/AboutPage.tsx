
import { Avatar, Box, Button, Fade, Grow, Icon, List, ListItem, ListItemAvatar, ListItemText, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'


export const AboutPage = () => {

    
    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <Fade in={true} timeout={1000}>
                <Box 
                    sx={{ 
                        width: "50%",
                        height: "auto",
                        display: "flex", 
                        flexDirection: "column",
                        justifyContent: "flex-start", 
                        alignItems: "center", 
                        border: "1px solid black",
                        borderRadius: 2,
                        padding: 2,
                        marginTop: 5
                    }}
                >
                    <Typography variant="h4" sx={{ marginBottom: 2 }}>About this project</Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2 }}>This project is a simple movie rating app. It is built with React and Material-UI. The app uses the OMDb API to fetch movie data. The user can search for movies and add them to a list. The user can also rate the movies. The app is responsive and has a dark mode. The app is a work in progress and more features will be added in the future.</Typography>
                </Box>
            </Fade>
        </Box>
    )
}