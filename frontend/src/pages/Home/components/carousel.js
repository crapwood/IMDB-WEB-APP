import React from "react";
import "./css/carousel.css";

const Carousel = (props) => {
  const { moviesOnTheater } = props;

  return (
    <div className="carousel-container">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={
                " http://image.tmdb.org/t/p/original/" +
                moviesOnTheater[0].poster_path
              }
              alt="..."
              class="d-block w-100"
              alt={moviesOnTheater[0].title}
            ></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>{moviesOnTheater[0].title}</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={
                " http://image.tmdb.org/t/p/original/" +
                moviesOnTheater[1].poster_path
              }
              alt="..."
              class="d-block w-100"
              alt={moviesOnTheater[1].title}
            ></img>

            <div class="carousel-caption d-none d-md-block">
              <h5>{moviesOnTheater[1].title}</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={
                " http://image.tmdb.org/t/p/original/" +
                moviesOnTheater[2].poster_path
              }
              alt="..."
              class="d-block w-100"
              alt={moviesOnTheater[2].title}
            ></img>

            <div class="carousel-caption d-none d-md-block">
              <h5>{moviesOnTheater[2].title}</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={
                " http://image.tmdb.org/t/p/original/" +
                moviesOnTheater[3].poster_path
              }
              alt="..."
              class="d-block w-100"
              alt={moviesOnTheater[3].title}
            ></img>

            <div class="carousel-caption d-none d-md-block">
              <h5>{moviesOnTheater[3].title}</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src={
                " http://image.tmdb.org/t/p/original/" +
                moviesOnTheater[4].poster_path
              }
              alt="..."
              class="d-block w-100"
              alt={moviesOnTheater[4].title}
            ></img>

            <div class="carousel-caption d-none d-md-block">
              <h5>{moviesOnTheater[4].title}</h5>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Carousel;
