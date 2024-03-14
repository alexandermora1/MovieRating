namespace MovieRatingApi.Interfaces;

public interface IMovie
{
    int Id { get; set; }
    string Title { get; set; }
    string Genre { get; set; }
    string Image { get; set; }
    
}