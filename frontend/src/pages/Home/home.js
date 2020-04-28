import React, { useState, useEffect, Suspense } from "react";
import Carousel from "./components/carousel";
import "./home.css";
import axios from "axios";

// const Carousel = React.lazy(() => import("./components/carousel"));

const Home = (props) => {
  const [moviesOnTheater, setMoviesOnTheater] = useState([]);

  useEffect(() => {
    const getLatestMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
        );
        console.log(response.data.results);
        setMoviesOnTheater([...response.data.results]);
      } catch (error) {}
    };
    getLatestMovies();
  }, []);

  const latestMovies = () => {
    return <Carousel moviesOnTheater={moviesOnTheater} />;
  };

  return (
    <>
      <div class="container-fluid">
        {moviesOnTheater.length == 0 && <h3>Loading movies...</h3>}
        {moviesOnTheater.length > 0 && latestMovies()}
      </div>
    </>
  );
};

export default Home;
