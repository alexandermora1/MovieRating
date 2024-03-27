using MovieRatingApi.Models;

namespace MovieRatingApi.Interfaces;

public interface IMovie
{
    int Id { get; set; }
    string Title { get; set; }
    string Genre { get; set; }
    string Poster { get; set; }
    string Year { get; set; } 
    ICollection<Rating> UserRatings { get; set; }
    double AverageRating { get; set; }
    
}