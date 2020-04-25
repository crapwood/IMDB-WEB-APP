import React, { useState, useEffect } from "react";
const axios = require("axios");

const Home = (props) => {
  const [moviesOnTheater, setMoviesOnTheater] = useState([]);

  useEffect(() => {
    getLatestMovies();
  }, []);

  const getLatestMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=7d37867c5ca54dec639654f44aa6d8ab&language=en-US`
      );
      console.log(response.data.results);
      setMoviesOnTheater([...response.data.results]);
    } catch (error) {}
  };

  const latestMovies = () => {
    return moviesOnTheater.map((movie, index) => (
      <>
        {index < 12 && (
          <img
            src={" http://image.tmdb.org/t/p/w185/" + movie.poster_path}
            alt="..."
            class="img-thumbnail"
            alt={movie.title}
          ></img>
        )}
      </>
    ));
  };

  return (
    <>
      <div class="container-fluid">
        <div class="row justify-content-center">
          <h5>NOW PLAYING IN THEATERS:</h5>
        </div>
        {latestMovies()}
      </div>
    </>
  );
};

export default Home;
