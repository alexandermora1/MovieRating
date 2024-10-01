# Movie Rating App

This project is a simple **Movie Rating App** built using **React**, **Typescript**, and **Material-UI**. The app allows users to search for movies, add them to a list, and rate them. The movie data is fetched from the **OMDb API**, and users can view a movie's details and average user ratings.

## Features

- **Movie Search**: Users can search for movies by title using the OMDb API.
- **Add to List**: Users will be able to add movies to a list. Not fully implemented.
- **Rate Movies**: Users can rate movies on a scale of 1 to 6 using dice icons.
- **View Ratings**: Average user ratings are displayed for each movie.
- **Responsive Design**: The app is fully responsive, working well on both desktop and mobile devices.
- **Dark Mode**: The app includes a dark mode for a better user experience in low-light environments.
- **Work in Progress**: More features, such as user created lists and user authentication, are planned for future updates.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Material-UI (MUI)**: A popular React UI framework for styling and components.
- **Font Awesome**: Used for displaying dice icons for rating movies.
- **OMDb API**: Used to fetch movie data such as title, genre, and poster.

## Getting Started

### Prerequisites

To run this project locally, you will need to have:

- **Node.js** (v14 or later)
- **npm** or **yarn** for managing dependencies
- An **OMDb API Key**

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/movie-rating-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd movierating
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add your OMDb API key:

   ```bash
   REACT_APP_API_KEY=your-omdb-api-key
   ```

5. Start the development server:

   ```bash
   npm start
   ```

   The app should now be running on [http://localhost:3000](http://localhost:3000).

### Backend Setup

The app includes a basic backend built using **.NET** and **Entity Framework** to manage movie data and ratings. You can set up the backend by following these steps:

1. Install the .NET SDK and Entity Framework Core.

2. Set up a database (e.g., SQL Server, SQLite) and configure the connection string in `appsettings.json`.

3. Run the backend server using the .NET CLI:

   ```bash
   dotnet run
   ```

### API Endpoints

The app communicates with the backend via the following endpoints:

- **GET** `/api/movie`: Fetch all movies from the database.
- **POST** `/api/movie`: Add a new movie. Not yet implemented fully.
- **POST** `/api/movie/{movieId}/ratings`: Submit a user rating for a movie.

### Key Code Snippets

1. **Fetching Movies from the Backend**:

   ```javascript
   React.useEffect(() => {
      const fetchMovies = async () => {
         const res = await fetch("http://localhost:5238/api/movie");
         const json = await res.json();
         setResponse(json);
      };
      fetchMovies();
   }, [updateAfterRating]);
   ```

2. **Submitting a Movie Rating**:

   ```javascript
   const postMovieRating = async (movieId, rating) => {
      const response = await fetch(`http://localhost:5238/api/movie/${movieId}/ratings`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({ MovieId: movieId, Value: rating }),
      });
      setUpdateAfterRating(true);
   };
   ```

3. **Handling Movie Search via OMDb API**:

   ```javascript
   const fetchMovies = async () => {
      const res = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}`);
      const json = await res.json();
      setMovie(json.Search);
   };
   ```

## Future Enhancements

- **User Authentication**: Allow users to log in and save their movie lists and ratings.
- **Pagination**: Add pagination to handle large lists of movies.
- **Lists**: Allow users to create new lists with user defined themes and genres.
- **Universal Design**: Use principles of universal design to improve accessibility.

