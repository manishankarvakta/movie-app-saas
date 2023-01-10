import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MovieDataApi from "../Utility/MovieDataApi";
import MovieThumbnail from "./MovieThumbnail";

function UpcomingMovies() {
  const [UpcomingMovies, setUpcomingMovies] = useState();
  const { upCommingMovie } = MovieDataApi();

  useEffect(() => {
    upCommingMovie(setUpcomingMovies);
  }, [upCommingMovie]);

  console.log(UpcomingMovies?.results);
  return (
    <div className="container">
      <section className="lists">
        <div className="row">
          <h2>Upcoming Movies</h2>
          {UpcomingMovies?.results?.length > 0 &&
            UpcomingMovies?.results?.map((movie) => {
              return <MovieThumbnail item={movie} key={movie.id} />;
            })}

          {/* {UpcomingMovies?.results?.length > 0 ? (
          UpcomingMovies?.results?.map((movie) => {
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

export default UpcomingMovies;
