using System.ComponentModel.DataAnnotations;

namespace MovieRatingApi.Models;

public class Rating
{
    [Key]
    public int Id { get; set; }
    public int MovieId { get; set; }

    [Range(1, 6, ErrorMessage = "Rating must be between 1 and 6")]
    public double Value { get; set; }
    public virtual Movie? Movie { get; set; }
}