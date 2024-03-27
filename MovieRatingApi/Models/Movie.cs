using System.Collections;
using System.ComponentModel.DataAnnotations;
using MovieRatingApi.Interfaces;


namespace MovieRatingApi.Models;

public class Movie : IMovie
{
    [Key]
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Genre { get; set; } = "";
    public string Poster { get; set; } = "";
    public string Year { get; set; } = "";
    public virtual ICollection<Rating> UserRatings { get; set; } = new List<Rating>();
    public double AverageRating { get; set; } = 0;
}

