export interface MovieList {
    id: number;
    title: string;
    genre: string;
    poster: string;
    year: string;
    averageRating: string;
}

export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Genre?: string;
}