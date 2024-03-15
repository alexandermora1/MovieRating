using Microsoft.EntityFrameworkCore;
using MovieRatingApi.Models;
using MovieRatingApi.Contexts;
using Microsoft.AspNetCore.Mvc;

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
    public async Task<ActionResult<List<Movie>>> GetMovies()
    {
        try
        {
            List<Movie> movies = await context.Movies.Take(20).ToListAsync();
            return movies;
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Movie>> GetMovie(int id)
    {
        try
        {
            Movie? movie = await context.Movies.FindAsync(id);
            if (movie == null)
            {
                return NotFound();
            }
            return movie;
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPost]
    public async Task<ActionResult<Movie>> PostMovie(Movie movie)
    {
        try
        {
            context.Movies.Add(movie);
            await context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMovie), new { id = movie.Id }, movie);
        }
        catch
        {
            return StatusCode(500);
        }
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> PutMovie(int id, Movie movie)
    {
        if (id != movie.Id)
        {
            return BadRequest();
        }
        try
        {
            context.Entry(movie).State = EntityState.Modified;
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
