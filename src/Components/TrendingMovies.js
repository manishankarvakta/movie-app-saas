import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieDataApi from "../Utility/MovieDataApi";
import MovieThumbnail from "./MovieThumbnail";

function TrendingMovies() {
  const [TrendingMovies, setTrendingMovies] = useState();
  const { getTrendingMovies } = MovieDataApi();

  useEffect(() => {
    getTrendingMovies(setTrendingMovies);
  }, [getTrendingMovies]);

  console.log(TrendingMovies?.results);
  return (
    <div className="container">
      <section className="lists">
        <div className="row">
          <h2>Trending Movies</h2>
          {TrendingMovies?.results?.length > 0 &&
            TrendingMovies?.results?.map((movie) => {
              return <MovieThumbnail item={movie} key={movie.id} />;
            })}

          {/* {TrendingMovies?.results?.length > 0 ? (
          TrendingMovies?.results?.map((movie) => {
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

export default TrendingMovies;
