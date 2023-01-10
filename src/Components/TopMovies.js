import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieDataApi from "../Utility/MovieDataApi";
import MovieThumbnail from "./MovieThumbnail";

function TopMovies() {
  const [topMovies, setTopMovies] = useState();
  const { getTopRatedMovies } = MovieDataApi();

  useEffect(() => {
    getTopRatedMovies(setTopMovies);
  }, [getTopRatedMovies]);

  console.log(topMovies?.results);
  return (
    <div className="container">
      <section className="lists">
        <div className="row">
          <h2>Top Rated Movies</h2>
          {topMovies?.results?.length > 0 &&
            topMovies?.results?.map((movie) => {
              return <MovieThumbnail item={movie} key={movie.id} />;
            })}

          {/* {topMovies?.results?.length > 0 ? (
          topMovies?.results?.map((movie) => {
            <p>hi</p>;
            //   <div className="list col-lg-2 col-md-3 col-xs-4 col-sm-3 col-6">
            //     <span className="type">HD {console.log(movie)}</span>
            //   </div>;
          })
        ) : (
          <p>Loading</p>
        )} */}
        </div>
      </section>
    </div>
  );
}

export default TopMovies;
