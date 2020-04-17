import React from "react";
const axios = require("axios");

const Home = (props) => {
  const getLatestMovies = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
      );
      console.log(response.data.results);
    } catch (error) {}
  };

  return (
    <>
      <h1>HOME</h1>

      <button onClick={getLatestMovies}>Click!!!</button>
    </>
  );
};

export default Home;
