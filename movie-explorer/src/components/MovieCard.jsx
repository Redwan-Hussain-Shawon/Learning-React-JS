import React from 'react'
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img alt="The Avengers" src={movie.Poster} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <Link to={`/movie/${movie.imdbID}`} data-discover="true">
        Details
      </Link>
    </div>
  );
};

export default MovieCard