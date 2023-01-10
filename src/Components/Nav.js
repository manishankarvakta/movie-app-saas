import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMenuOutline, IoPersonOutline } from "react-icons/io5";
// import * as Icons from "@heroicons/react";
import MovieDataApi from "../Utility/MovieDataApi";
import { NavDropdown } from "react-bootstrap";

function Nav() {
  const [genre, setGenre] = useState([]);
  const { getMovieGenre } = MovieDataApi();

  useEffect(() => {
    getMovieGenre(setGenre);
  }, [getMovieGenre]);
  // console.log(genre.genres);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" href="index.html">
        {/* <Icons.Ad /> */}
        {/* {console.log(Icons)} */}

        {/* <i className="fa fa-film fa-fw fa-2x"></i> */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <IoMenuOutline />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link" title="Home">
              HOME{" "}
            </Link>
            {/* <a className="nav-link" href="index.html">
              Home <span className="sr-only">(current)</span>
            </a> */}
          </li>
          <li className="nav-item dropdown" id="genre">
            {/* <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Genre
            </Link> */}
            <NavDropdown title="Genre" id="basic-nav-dropdown">
              {genre?.genres?.length > 0 &&
                genre.genres.map((g) => (
                  <NavDropdown.Item href={`/genre/${g.id}`} key={g.id}>
                    {g.name}
                  </NavDropdown.Item>
                ))}
              {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
            </NavDropdown>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="movie.html">
              Movie
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TV Show
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Top IMDB
            </a>
          </li>
        </ul>
        {/* <!-- <ul className="nav ml-auto">
              <li className="nav-item">
              </li>
          </ul> --> */}
        <Link className=" btn btn-outline-success" to="/login">
          {/* <i className="fa fa-user fa-fw"> </i> */}
          <IoPersonOutline size={25} className="mr-2" />
          User Login
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
