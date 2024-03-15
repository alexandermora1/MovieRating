#nullable disable
using Microsoft.EntityFrameworkCore;
using MovieRatingApi.Models;

namespace MovieRatingApi.Contexts;

public class MovieRatingContext : DbContext
{
    public MovieRatingContext(DbContextOptions<MovieRatingContext> options) : base(options){}

    public DbSet<Movie> Movies { get; set; } 
}