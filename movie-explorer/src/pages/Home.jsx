import React, { useEffect, useRef, useState } from "react";
import MovieList from "../components/MovieList";
import MovieSkeleton from "../components/MovieSkeleton";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";

const Home = () => {
  const [movie, setMovies] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const inputRef = useRef()
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  
  const fetchMovies = async (q = '') => {
    setLoading(true)
    const res = await fetch(`http://www.omdbapi.com/?apikey=d5ac26a0&s=${q}`);
    const data = await res.json();
    setTimeout(() => {
      setMovies(data.Search || []);
      setLoading(false);
   },3000)

  }
  useEffect(() => {
    fetchMovies(query)
  }, [query])
  
  const handleSearch = (e) => { 
    e.preventDefault();
    const q = inputRef.current.value.trim();
    if (q) {
      navigate(`/?query=${encodeURIComponent(q)}`);
    }

  }
  return (
    <div className="home">
      <form onSubmit={handleSearch}>
        <input ref={inputRef} className="searchInput" placeholder="Search for a movie..." />
        <button type="submit">Search 🔎</button>
      </form>
      {isLoading ? <MovieSkeleton /> :  <MovieList movies={movie} />}
    </div>
  );
};

export default Home;
