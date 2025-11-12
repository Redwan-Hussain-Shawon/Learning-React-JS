import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
      let { movieId } = useParams();
  const [movie, setMovies] = useState(null);
   async function getMoview() {
     const res = await fetch(
       `http://www.omdbapi.com/?apikey=d5ac26a0&i=${movieId}`
     );
     const data = await res.json();
     setMovies(data);
     console.log(data);
   }
  
  useEffect(() => {
    getMoview();
  },[])
  return movie&&(
    <div
      className="movie-detail"
      style={{ maxWidth: "900px", margin: "40px auto", color: "#fff" }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "10px" }}>{movie.Title}</h2>
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.Title}
        style={{ width: "300px", borderRadius: "10px", marginBottom: "20px" }}
      />

      <p>
        <strong>🎬 Genre:</strong> {movie.Genre}
      </p>
      <p>
        <strong>🗓 Released:</strong> {movie.Released}
      </p>
      <p>
        <strong>⏱ Runtime:</strong> {movie.Runtime}
      </p>
      <p>
        <strong>⭐ IMDb Rating:</strong> {movie.imdbRating} / 10 (
        {movie.imdbVotes} votes)
      </p>
      <p>
        <strong>🏆 Awards:</strong> {movie.Awards}
      </p>
      <p>
        <strong>🌍 Language:</strong> {movie.Language}
      </p>
      <p>
        <strong>📍 Country:</strong> {movie.Country}
      </p>
      <p>
        <strong>🎥 Director:</strong> {movie.Director}
      </p>
      <p>
        <strong>✍️ Writer:</strong> {movie.Writer}
      </p>
      <p>
        <strong>🎭 Actors:</strong> {movie.Actors}
      </p>
      <p>
        <strong>💰 Box Office:</strong> {movie.BoxOffice}
      </p>
      <p>
        <strong>🧩 Plot:</strong> {movie.Plot}
      </p>

      {movie.Ratings && movie.Ratings.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Ratings:</h3>
          <ul>
            {movie.Ratings.map((r, i) => (
              <li key={i}>
                <strong>{r.Source}:</strong> {r.Value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieDetail