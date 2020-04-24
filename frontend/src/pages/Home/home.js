import React, { useState } from "react";
const axios = require("axios");

const Home = (props) => {
  const [moviesOnTheater, setMoviesOnTheater] = useState([]);

  const getLatestMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=7d37867c5ca54dec639654f44aa6d8ab&language=en-US`
      );
      console.log(response.data.results);
      setMoviesOnTheater([...response.data.results]);
    } catch (error) {}
  };

  const printData = () => {
    return moviesOnTheater.map((movie) => (
      <>
        <img
          src={" http://image.tmdb.org/t/p/w185/" + movie.poster_path}
          alt="..."
          class="img-thumbnail"
        ></img>
        <p>{movie.title}</p>
      </>
    ));
  };

  return (
    <>
      <div class="container-fluid">
        <button onClick={getLatestMovies}>Click!!!</button>
        <hr />
        {printData()}
      </div>
    </>
  );
};

export default Home;
