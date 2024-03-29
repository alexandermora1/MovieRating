
import { Avatar, Box, Button, Fade, Grow, Icon, TextField, Typography } from '@mui/material'
import React from 'react'


interface Movie {
    Title: string;
    Year: string;
    Poster: string;
    Genre?: string; // Assuming Genre might not always be present
}

export const AboutPage = () => {

    const [searchInput, setSearchInput] = React.useState("");
    const [movie, setMovie] = React.useState<Movie | null>(null);

    const apiKey = process.env.REACT_APP_API_KEY;
    
    const fetchMovies = async () => {
        if (searchInput) {
            const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`);            
            const json = await res.json();
            console.log("Logging json: ", json);
            if (json.Search) {
                setMovie(json.Search[0]);
                console.log("Logging movie: ", movie);
            } else {
                setMovie(null);
            }
        } else {
            setMovie(null);
        }
    }


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
                        backgroundColor: "background.paper",
                        boxShadow: 5,
                        borderRadius: 2, 
                        padding: 3,
                    }}
                >
                    
                    <Typography variant="h5" sx={{ marginBottom: 3}}>Add new movie</Typography>
                    
                    <Box sx={{ display: "flex", width: "100%", justifyContent: "center" }}>
                        <TextField
                            variant="outlined"
                            id="search-field"
                            label="Search OMDB for movie"
                            fullWidth
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <Button onClick={fetchMovies} variant="contained" sx={{ marginLeft: 2 }}>Search</Button>
                    </Box>
                    {movie && (
                        <Box sx={{ display: "flex", width: "100%", flexDirection: "row", marginTop: 4 }}>                            
                            <Avatar alt={movie.Title} src={movie.Poster} variant="square" sx={{ height: 128, width: 128, marginRight: "20px", boxShadow: 5 }}/>
                            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "space-between" }}>                                    
                                <Typography variant="h5" color="text.primary" fontWeight="bold">{movie.Title}</Typography>    
                                <Typography variant="body1" color="text.secondary">{movie.Year}</Typography>
                                <Typography variant="body2" color="text.secondary">{movie.Genre}</Typography>
                            </Box>
                        </Box>
                    )}
                                    

                    <Box sx={{ display: "flex", width: "100%", height: "100%", justifyContent: "flex-end", alignItems: "flex-end" }}>
                        <Button variant="contained" color="primary">Add movie</Button>
                    </Box>
                </Box>
                
            </Fade>

        </Box>
    )
}