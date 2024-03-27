import { Avatar, Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { faDice, faDiceOne } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MovieList } from "../interfaces/MovieList";


export const HomePage = () => {

    const [userRating, setUserRating] = React.useState(0);
    const [response, setResponse] = React.useState<MovieList[]>([]);

    React.useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch("http://localhost:5238/api/movie");
            const json = await res.json();
            setResponse(json);
            console.log(json);
        }

        fetchMovies();
    }, [])

    return (
        <Box>
            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h3>Seen 2024</h3>                
                </Box>

                <List sx={{ width: "100%", maxWidth: 600, justifyContent: "center" }}>
                    {response && response.map((movie, index) => (
                        <ListItem 
                            key={index} 
                            sx={{ 
                                display: "flex", 
                                flexDirection: "column",
                                alignItems: "flex-start", 
                                padding: "10px", 
                                margin: "3px", 
                                backgroundColor: index % 2 === 0 ? "#f5f5f5" : "#fdfdfd", //alternating row colors based on if index is even or odd
                            }}
                        >
                            <Box sx={{ display: "flex", width: "100%", flexDirection: "row" }}>                            
                                <Avatar alt={movie.title} src={movie.poster} variant="square" sx={{ height: "100%", width: "20%", marginRight: "20px", boxShadow: 5}}/>
                                
                                <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>                                    
                                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.primary"
                                            sx={{ marginRight: 1,  }}
                                        >
                                            {movie.id}.
                                        </Typography>
                                                
                                        <Typography
                                            variant="h5"
                                            color="text.primary"
                                            fontWeight="bold"
                                        >                         
                                            {movie.title}
                                        </Typography>    
                                                
                                        <Typography
                                            variant="h6"
                                            color="text.secondary"
                                            sx={{ marginLeft: 1}}
                                        >
                                            ({movie.year})
                                        </Typography>          
                                    </Box>

                                    <Box sx={{ display: "flex", flexDirection: "column", marginLeft: "20px", justifyContent: "flex-start", flexGrow: 1 }}>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"                                    
                                        >
                                            {movie.genre}
                                        </Typography>   
                                    </Box>

                                    
                                    

                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignContent: "space-between", alignItems: "flex-end", marginLeft: "20px" }}>
                                        <Typography
                                            variant="body1"
                                            color="text.primary"                                            
                                        >
                                            User rating: {movie.userRating}
                                        </Typography> 

                                        <Box sx={{ display: "flex", alignItems: "flex-end"}}>
                                            <Typography variant="body1" color="text.secondary">Rate:</Typography>

                                            <Button                          
                                                color="secondary"                                                                                                    
                                                // onClick={() => setUserRating()}  //TODO: PUT request to update user rating
                                            >
                                                <FontAwesomeIcon icon={faDice} size="3x"/>
                                            </Button>
                                        </Box>
                                    </Box>      
                                </Box>
                                                                        
                                                                                                   
                            </Box>                                                                                                                        
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
        
    );
}