import React from "react";
import PropTypes from "prop-types";
import Home from "../Pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "../Components/Nav";
import Search from "../Components/Search";

function Layout(props) {
  return (
    <div className="main-wrapper">
      {/* HEADER */}
      <header>
        {/* nav */}
        <Nav />

        {/* <!-- search area --> */}
        <Search />
      </header>
      {/* FOOTER */}
    </div>
  );
}

Layout.propTypes = {};

export default Layout;
