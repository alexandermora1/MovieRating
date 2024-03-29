﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MovieRatingApi.Contexts;

#nullable disable

namespace MovieRatingApi.Migrations
{
    [DbContext(typeof(MovieRatingContext))]
    [Migration("20240317122832_UpdateMovieModel")]
    partial class UpdateMovieModel
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.0");

            modelBuilder.Entity("MovieRatingApi.Models.Movie", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Actors")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Awards")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("BoxOffice")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Country")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("DVD")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Director")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Genre")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("ImdbRating")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("ImdbVotes")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Language")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Metascore")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Plot")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Poster")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Production")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Rated")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Released")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Response")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Runtime")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Type")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Website")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Writer")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Year")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Movies");
                });

            modelBuilder.Entity("MovieRatingApi.Models.Rating", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("MovieId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Source")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Value")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("MovieId");

                    b.ToTable("Rating");
                });

            modelBuilder.Entity("MovieRatingApi.Models.Rating", b =>
                {
                    b.HasOne("MovieRatingApi.Models.Movie", "Movie")
                        .WithMany("Ratings")
                        .HasForeignKey("MovieId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Movie");
                });

            modelBuilder.Entity("MovieRatingApi.Models.Movie", b =>
                {
                    b.Navigation("Ratings");
                });
#pragma warning restore 612, 618
        }
    }
}
