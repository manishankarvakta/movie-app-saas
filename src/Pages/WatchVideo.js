import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Watch from "../Components/Watch";
import MovieDataApi from "../Utility/MovieDataApi";

const WatchVideo = () => {
  const [movie, setMovie] = useState();
  const [cridits, setCridits] = useState();

  const { movieCredits, movieDetails } = MovieDataApi();
  const { id } = useParams();

  useEffect(() => {
    movieCredits(id, setCridits);
    movieDetails(id, setMovie);
  }, []);

  console.log(id, movie, cridits);
  return (
    <div className="container">
      <div className="col-8">
        {movie?.imdb_id && <Watch imdb_id={movie?.imdb_id} />}
      </div>
    </div>
  );
};

export default WatchVideo;
