import { Avatar, Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { faDice, faDiceFive, faDiceFour, faDiceOne, faDiceSix, faDiceThree, faDiceTwo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MovieList } from "../interfaces/MovieList";





export const HomePage = () => {

    const [addUserRating, setAddUserRating] = React.useState(0);
    const [response, setResponse] = React.useState<MovieList[]>([]);
    const [diceButtonlicked, setDiceButtonClicked] = React.useState(false);

    React.useEffect(() => {
        const fetchMovies = async () => {
            const res = await fetch("http://localhost:5238/api/movie");
            console.log("Logging res: ", res);
            const json = await res.json();
            console.log("Logging json: ", json);
            setResponse(json);
            console.log("Logging after setResponse: ", json);
            console.log(diceButtonlicked);
        }

        fetchMovies();
    }, [])    


    const handleSetUserRating = async (movieId: number, rating: number) => {
        console.log(`Rating movie ${movieId} with value ${rating}`);

        await postMovieRating(movieId, rating);        
    }


    const postMovieRating = async (movieId: number, rating: number) => {
        
        const ratingData = {
            MovieId: movieId,
            Value: rating
        };

        try {
            const response = await fetch(`http://localhost:5238/api/movie/${movieId}/ratings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(ratingData),
                
                
            });

            if (!response.ok) {
                throw new Error("Failed to post rating");
            }

            const data = await response.json();
            console.log("Rating successful: ", data);

        } catch (error) {
            console.log("Error submitting rating: ", error);
        }

        setDiceButtonClicked(false);
    }




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
                                backgroundColor: index % 2 === 0 ? "background.default" : "background.paper", //alternating row colors based on if index is even or odd
                            }}
                        >
                            <Box sx={{ display: "flex", width: "100%", flexDirection: "row" }}>                            
                                <Avatar alt={movie.title} src={movie.poster} variant="square" sx={{ height: "100%", width: "20%", marginRight: "20px", boxShadow: 5}}/>
                                
                                <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>                                    
                                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "flex-start" }}>
                                        <Typography
                                            variant="subtitle1"
                                            color="text.secondary"
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
                                            User rating: {movie.averageRating}
                                        </Typography> 

                                        <Box sx={{ display: "flex", alignItems: "flex-end"}}>
                                            <Typography variant="body1" color="text.secondary">Rate:</Typography>

                                            <Button                          
                                                color="secondary"                                                                                                    
                                                onClick={() => setDiceButtonClicked(!diceButtonlicked)}
                                            >
                                                {!diceButtonlicked ? (
                                                    <FontAwesomeIcon icon={faDice} size="3x"/> 
                                                    ) : (
                                                        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                            <Button color="secondary" onClick={() => handleSetUserRating(movie.id, 1)}>
                                                                <FontAwesomeIcon icon={faDiceOne} size="2x"/>
                                                            </Button>
                                                            <Button color="secondary" onClick={() => handleSetUserRating(movie.id, 2)}>
                                                                <FontAwesomeIcon icon={faDiceTwo} size="2x"/>
                                                            </Button>
                                                            <Button color="secondary" onClick={() => handleSetUserRating(movie.id, 3)}>
                                                                <FontAwesomeIcon icon={faDiceThree} size="2x"/>
                                                            </Button>
                                                            <Button color="secondary" onClick={() => handleSetUserRating(movie.id, 4)}>
                                                                <FontAwesomeIcon icon={faDiceFour} size="2x"/>
                                                            </Button>
                                                            <Button color="secondary" onClick={() => handleSetUserRating(movie.id, 5)}>
                                                                <FontAwesomeIcon icon={faDiceFive} size="2x"/>
                                                            </Button>
                                                            <Button color="secondary" onClick={() => handleSetUserRating(movie.id, 6)}>
                                                                <FontAwesomeIcon icon={faDiceSix} size="2x"/>
                                                            </Button>
                                                        </Box>
                                                    )}
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