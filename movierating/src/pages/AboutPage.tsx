
import { Avatar, Box, Button, Fade, Grow, Icon, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'


interface Movie {
    Title: string;
    Year: string;
    Poster: string;
    imdbID: string;
    Genre?: string; // Assuming Genre might not always be available
}

export const AboutPage = () => {

    const [searchInput, setSearchInput] = React.useState("");
    const [movie, setMovie] = React.useState<Movie[]>([]);
    const [selectedMovie, setSelectedMovie] = React.useState<Movie | null>(null);

    const apiKey = process.env.REACT_APP_API_KEY;
    
    const fetchMovies = async () => {
        if (searchInput) {
            const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`);            
            const json = await res.json();
            console.log("Logging json: ", json);
            if (json.Search) {
                setMovie(json.Search);
                console.log("Logging movie: ", movie);
            } else {
                setMovie([]);
            }
        } else {
            setMovie([]);
        }
    }

    React.useEffect(() => {
      fetchMovies();
    }, [searchInput]);
  
    const handleMovieSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedMovie = movie?.find(movie => movie.imdbID === event.target.value) || null;
      setSelectedMovie(selectedMovie);
      console.log("Logging selected movie: ", selectedMovie);
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

            <Typography variant="h3" sx={{ marginBottom: 5 }} >Add new movie page</Typography>

            <Fade in={true} timeout={1000}>
                <Box 
                    sx={{ 
                        width: "50%",
                        height: "auto",
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
                    </Box>

                    {movie.length > 0 && (
                        <Box sx={{ display: "flex", flexDirection: "column", width: "100%", marginTop: 4 }}>
                          <TextField
                            select
                            label="Select movie"
                            value={selectedMovie ? selectedMovie.imdbID : ""}
                            onChange={handleMovieSelection}
                            variant="outlined"
                            fullWidth
                          >
                            {movie.map((movie: Movie, index: number) => (
                              <MenuItem key={movie.imdbID} value={movie.imdbID}>
                                {movie.Title}
                              </MenuItem>
                            ))}
                          </TextField>
                        </Box>
                    )}
                    {selectedMovie && (
                        <Box sx={{ display: "flex", width: "100%", flexDirection: "row", marginTop: 4 }}>                            
                            <Avatar alt={selectedMovie.Title} src={selectedMovie.Poster} variant="square" sx={{ height: 200, width: 128, marginRight: "20px", boxShadow: 5 }}/>
                            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>                                    
                                <Typography variant="h5" color="text.primary" fontWeight="bold">{selectedMovie.Title}</Typography>    
                                <Typography variant="body1" color="text.secondary">{selectedMovie.Year} </Typography>
                                <Typography variant="body2" color="text.secondary">{selectedMovie.Genre}</Typography>
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