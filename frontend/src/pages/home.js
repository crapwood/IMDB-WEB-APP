import React from "react";
const axios = require('axios');

const Home = (props) => {

  const getLatestMovies = () =>{
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.tmdb_api_key}&language=en-US&page=1`);
      console.log(response)
    } catch (error) {
      
    }
  };

  return (<>
    <h1>HOME</h1>
    <button onClick={getLatestMovies}></button>
  
  
  
  </>);
};

export default Home;
