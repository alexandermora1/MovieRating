
namespace MovieRatingApi.DTO;
public class MovieDto
{
    public int Id { get; set; }
    public string Title { get; set; } = "";
    public string Genre { get; set; } = "";
    public string Poster { get; set; } = "";
    public string Year { get; set; } = "";
    public double AverageRating { get; set; } = 0;
}