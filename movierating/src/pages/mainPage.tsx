import { Avatar, Box, Button, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import { faDice, faDiceOne } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const MainPage = () => {

    const [userRating, setUserRating] = React.useState(0);
  
    const dummyMovies = [
        {
          id: 1,
          title: "The Shawshank Redemption",
          year: "1994",
          genre: "Drama",
          poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
          userRating: 5
        },
        {
          id: 2,
          title: "The Godfather",
          year: "1972",
          genre: "Crime, Drama",
          poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
          userRating: 4
        },
        {
          id: 3,
          title: "The Dark Knight",
          year: "2008",
          genre: "Action, Crime, Drama",
          poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
          userRating: 5
        },
        {
          id: 4,
          title: "12 Angry Men",
          year: "1957",
          genre: "Crime, Drama",
          poster: "https://example.com/posters/12angrymen.jpg",
          userRating: 3
        },
        {
          id: 5,
          title: "Schindler's List",
          year: "1993",
          genre: "Biography, Drama, History",
          poster: "https://example.com/posters/schindlerslist.jpg",
          userRating: 4
        },
        {
          id: 6,
          title: "The Lord of the Rings: The Return of the King",
          year: "2003",
          genre: "Action, Adventure, Drama",
          poster: "https://example.com/posters/returnoftheking.jpg",
          userRating: 6
        },
        {
          id: 7,
          title: "Pulp Fiction",
          year: "1994",
          genre: "Crime, Drama",
          poster: "https://example.com/posters/pulpfiction.jpg",
          userRating: 5
        },
        {
          id: 8,
          title: "The Good, the Bad and the Ugly",
          year: "1966",
          genre: "Western",
          poster: "https://example.com/posters/goodbadugly.jpg",
          userRating: 4
        },
        {
          id: 9,
          title: "Fight Club",
          year: "1999",
          genre: "Drama",
          poster: "https://example.com/posters/fightclub.jpg",
          userRating: 5
        },
        {
          id: 10,
          title: "Forrest Gump",
          year: "1994",
          genre: "Drama, Romance",
          poster: "https://example.com/posters/forrestgump.jpg",
          userRating: 5
        }
      ];

    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h1>Main Page</h1>
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <h3>Top 10 movies</h3>                
                </Box>

                <List sx={{ width: "100%", maxWidth: 600, justifyContent: "center" }}>
                    {dummyMovies.map((movie) => (
                        <ListItem key={movie.id} sx={{ display: "flex", alignItems: "flex-start", border: "solid 1px lightgray", padding: "10px", margin: "5px", backgroundColor: "white"}}>
                            <Avatar alt={movie.title} src={movie.poster} variant="square" sx={{ height: "100%", width: "20%", marginRight: "10px"}}/>
                            <ListItemText
                                primary={                                    
                                        <Typography
                                            variant="h5"
                                            color="text.primary"
                                        >
                                            {movie.title}
                                        </Typography>                                    
                                }
                                secondary={
                                    <Box>
                                        <Typography                                                                                 
                                            variant="body2"
                                            color="text.primary"                                            
                                        >
                                            {movie.year}                                
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"                                    
                                        >
                                            {movie.genre}
                                        </Typography>    
                                        <Typography
                                            variant="body1"
                                            color="text.primary"
                                            sx={{ alignItems: "flex-end" }}                                        
                                        >
                                            User rating: {movie.userRating}
                                        </Typography>                
                                    </Box>
                                }
                            >
                            </ListItemText>                                                

                            
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "flex-end", alignSelf: "flex-end" }}>
                                <Typography>
                                    Rate:
                                </Typography>
                                <Button                          
                                    color="secondary"                                                                                                    
                                    onClick={() => setUserRating(movie.userRating)}
                                >
                                    <FontAwesomeIcon icon={faDice} size="3x"/>
                                </Button>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
        
    );
}