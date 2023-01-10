import React from "react";
import { IoStar, IoPlayCircleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function MovieThumbnail({ item }) {
  return (
    <div className="list col-lg-2 col-md-3 col-xs-4 col-sm-3 col-6">
      <span className="type">HD</span>
      <Link to={`/watch/${item.id}`} className="play">
        <IoPlayCircleSharp size={30} />
        {/* </Link>
        <Link to="watch-movie.html?movie=${id}"> */}
        <img
          className="img-fluid"
          src={`${process.env.REACT_APP_TMDB_IMAGE_ENDPOINT}${item.poster_path}`}
          alt=""
          data-movie-id="${id}"
        />
      </Link>
      <Link className="loop-title" to={`/watch/${item.id}`}>
        <h4> {item.title}</h4>
      </Link>
      <p>
        {item.release_date.substring(0, 4)}
        <FaStar /> {item.vote_average}{" "}
        <span className="float-right"> Movie</span>
      </p>
    </div>
  );
}

export default MovieThumbnail;
