import React from "react";
// import * as Icons from "@heroicons/react";
function Nav() {
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
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <a className="nav-link" href="index.html">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown" id="genre">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Genre
            </a>
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
        <a className="nav-link btn btn-outline-success" href="#">
          <i className="fa fa-user fa-fw"> </i> User Login
        </a>
      </div>
    </nav>
  );
}

Nav.propTypes = {};

export default Nav;
