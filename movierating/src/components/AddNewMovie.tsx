
import { Avatar, Box, Button, Fade, Grow, Icon, List, ListItem, ListItemAvatar, ListItemText, MenuItem, TextField, Typography } from '@mui/material'
import React from 'react'
import { Movie } from '../interfaces/MovieList';


interface ShowAddNewMovieBox {
  showAddNewMovieBox: boolean;
  setShowAddNewMovieBox: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddNewMovie: React.FC<ShowAddNewMovieBox> = ({ setShowAddNewMovieBox}) => {

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

    const fetchAndSetMovieDetails = async (imdbID: string) => {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`);
      const json = await res.json();
      setSelectedMovie(json);
      console.log("Logging selected movie: ", json);
    }

    React.useEffect(() => {
      fetchMovies();
    }, [searchInput]);
  
    const handleMovieSelection = (movie: Movie) => {      
      fetchAndSetMovieDetails(movie.imdbID);
      setSearchInput("");      
    }

    const addMovie = () => {
        console.log("Adding movie: ", selectedMovie);
        setShowAddNewMovieBox(false);
    }

    const showAddNewBox = () => {
      setShowAddNewMovieBox(false);
  }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "50vh", width: "100%", marginTop: 5 }}>

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
                    
                    <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-start", marginBottom: 2 }}>
                      <Button variant="outlined" onClick={showAddNewBox} sx={{ width: "30px", height: "30px", minWidth: 0 }}>X</Button>
                    </Box>
                    
                    <Typography variant="h4" sx={{ marginBottom: 3}}>Add new movie</Typography>
                    
                    <Box sx={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center" }}>
                        <TextField
                            variant="outlined"
                            id="search-field"
                            label="Search OMDB for movie"
                            fullWidth
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                      
                        {movie.length > 0 && (
                          <Box sx={{ display: "flex", flexDirection: "column", width: "100%", marginTop: 4 }}>
                            <List dense>
                              {movie.map((movie: Movie, index: number) => (
                                <ListItem 
                                  key={movie.imdbID}                                  
                                  onClick={() => handleMovieSelection(movie)}
                                >
                                  <ListItemAvatar>
                                    <Avatar src={movie.Poster} variant="square" sx={{ maxWidth: "100%", height: "100%", boxShadow: 5 }}/>
                                  </ListItemAvatar>
                                  <ListItemText
                                    primary={movie.Title}
                                    secondary={movie.Year}
                                  />
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        )}
                    </Box>

                    {selectedMovie && (
                        <Box sx={{ display: "flex", width: "100%", flexDirection: "row", marginTop: 4 }}>                            
                            <Avatar 
                            alt={selectedMovie.Title} 
                            src={selectedMovie.Poster} 
                            variant="square" 
                            sx={{ maxWidth: "100%", height: "auto", marginRight: "10px", boxShadow: 5 }}
                            />
                            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>                                    
                                <Typography variant="h5" color="text.primary" fontWeight="bold">{selectedMovie.Title}</Typography>    
                                <Typography variant="body1" color="text.secondary">{selectedMovie.Year} </Typography>
                                <Typography variant="body2" color="text.secondary">{selectedMovie.Genre}</Typography>                                
                            </Box>
                        </Box>
                    )}
                                    

                    <Box sx={{ display: "flex", width: "100%", height: "100%", justifyContent: "flex-end", alignItems: "flex-end", marginTop: 4 }}>
                        <Button onClick={addMovie} variant="contained" color="primary">Add movie</Button>
                    </Box>
                </Box>
                
            </Fade>

        </Box>
    )
}