using Microsoft.EntityFrameworkCore;
using MovieRatingApi.Models;
using MovieRatingApi.Contexts;
using Microsoft.AspNetCore.Mvc;
using MovieRatingApi.DTO;

namespace MovieRatingApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MovieController : ControllerBase
{
    private readonly MovieRatingContext context;

    public MovieController(MovieRatingContext _context)
    {
        context = _context;
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<MovieDto>>> GetMovies()
    {
        try
        {
            var movies = await context.Movies
                .Select(m => new MovieDto
                {
                    Id = m.Id,
                    Title = m.Title,
                    Genre = m.Genre,
                    Poster = m.Poster,
                    Year = m.Year,
                    AverageRating = m.UserRatings.Any() ? m.UserRatings.Average(r => r.Value) : 0
                })
                .ToListAsync();
                
            return Ok(movies);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<MovieDto>> GetMovie(int id)
    {
        try
        {
            var movie = await context.Movies
                .Select(m => new MovieDto
                {
                    Id = m.Id,
                    Title = m.Title,
                    Genre = m.Genre,
                    Poster = m.Poster,
                    Year = m.Year,
                    AverageRating = m.UserRatings.Average(r => r.Value)
                })
                .FirstOrDefaultAsync();
            
            if (movie == null)
            {
                return NotFound();
            }

            return Ok(movie);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPost]
    public async Task<ActionResult<MovieDto>> PostMovie([FromBody] CreateMovieDto createMovieDto)
    {
        try {
            var movie = new Movie
            {
                Title = createMovieDto.Title,
                Genre = createMovieDto.Genre,
                Poster = createMovieDto.Poster,
                Year = createMovieDto.Year
            };

            context.Movies.Add(movie);
            await context.SaveChangesAsync();

            var movieDto = new MovieDto
            {
                Id = movie.Id,
                Title = movie.Title,
                Genre = movie.Genre,
                Poster = movie.Poster,
                Year = movie.Year,
                AverageRating = 0
            };

            return CreatedAtAction(nameof(GetMovie), new { id = movie.Id }, movieDto );
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPost("{movieId}/ratings")]
    public async Task<ActionResult> PostRating(int movieId, [FromBody] RatingDto ratingDto)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }
        
        try
        {
            var movie = await context.Movies
                .Include(m => m.UserRatings)
                .FirstOrDefaultAsync(m => m.Id == movieId);
            if (movie == null)
            {
                return NotFound();
            }

            var rating = new Rating
            {
                MovieId = movieId,
                Value = ratingDto.Value
            };

            movie.UserRatings.Add(rating);
            movie.AverageRating = movie.UserRatings.Average(r => r.Value);
            await context.SaveChangesAsync();

            var ratingResponseDto = new RatingResponseDto
            {
                Id = rating.Id,
                Value = rating.Value
            };

            return CreatedAtAction(nameof(GetMovie), new { id = movieId }, ratingResponseDto);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> PutMovie(int id, [FromBody] UpdateMovieDto updateMovieDto)
    {
        try {
            var movie = await context.Movies.FindAsync(id);

            if (movie == null)
            {
                return NotFound();
            }

            movie.Title = updateMovieDto.Title ?? movie.Title;
            movie.Genre = updateMovieDto.Genre ?? movie.Genre;
            movie.Poster = updateMovieDto.Poster ?? movie.Poster;
            movie.Year = updateMovieDto.Year ?? movie.Year;

            await context.SaveChangesAsync();
       
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }


    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteMovie(int id)
    {
        try
        {
            Movie? movieToDelete = await context.Movies.FindAsync(id);
            if (movieToDelete == null)
            {
                return NotFound();
            }
            context.Movies.Remove(movieToDelete);
            await context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }

}
