import React, { useState, useEffect, Suspense } from "react";
import Carousel from "./components/carousel";
import "./home.css";
import axios from "axios";

// const Carousel = React.lazy(() => import("./components/carousel"));

const Home = (props) => {
  const [moviesOnTheater, setMoviesOnTheater] = useState([]);
  const [spin, setSpin] = useState(true);

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
    loadSpinner();
  }, []);

  const latestMovies = () => {
    return <Carousel moviesOnTheater={moviesOnTheater} />;
  };
  const loadSpinner = () => {
    setTimeout(() => {
      console.log("fdfdfdf");
      setSpin(false);
    }, 3000);
  };

  return (
    <>
      <div class="container-fluid">
        {spin == true && (
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        )}
        {moviesOnTheater.length > 0 && spin == false && latestMovies()}
      </div>
    </>
  );
};

export default Home;
