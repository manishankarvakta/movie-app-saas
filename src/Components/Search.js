import React from "react";
import PropTypes from "prop-types";

function Search(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="search-wrapper">
            <h1 className="text-center">Find Movies, TV Shows and More</h1>
            <div className="center">
              <form className="form-inline row form-row d-flex justify-content-center">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-search fa-fw"> </i>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="searchField"
                      placeholder="Enter Keywords ..."
                    />
                  </div>
                </div>
                <button type="submit" id="search" className="btn btn-success">
                  <i className="fa fa-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Search.propTypes = {};

export default Search;
