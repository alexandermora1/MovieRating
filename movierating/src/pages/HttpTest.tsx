import { Box, Button } from '@mui/material';
import React from 'react';


interface MovieList {
    id: number;
    title: string;
    genre: string;
    poster: string;
    year: string;
    userRating: string;
}

const HttpTest: React.FC = () => {

    const [response, setResponse] = React.useState<MovieList[]>([]);

    const handleFetch = async () => {
        const res = await fetch("http://localhost:5238/api/movie");
        const json = await res.json();
        setResponse(json);
        console.log(json);
    }

    

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h1>Http Test</h1>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                {response && response.map((movie, index) => (
                    <div key={index}>
                        <img src={movie.poster} alt="" />
                        <p>Title: {movie.title}</p>
                        <p>Genre: {movie.genre}</p>
                        <p>Year: {movie.year}</p>
                        <p>User rating: {movie.userRating}</p>
                    </div>
                ))}
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>


            </Box>

            <Box sx={{ display: "flex", justifyContent: "center"}}>
                <Button onClick={handleFetch} variant="contained" color="primary" >
                    Fetch data
                </Button>
            </Box>
        </Box>
    )   

}


export default HttpTest;