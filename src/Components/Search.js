import React from "react";
import { IoSearchOutline, IoArrowForwardSharp } from "react-icons/io5";

function Search(props) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="search-wrapper">
            <h1 className="text-center">Find Movies, TV Shows and More</h1>
            <div className="center">
              <form
                style={{ flexWrap: "nowrap" }}
                className="form-inline row form-row d-flex flex-row justify-content-center"
              >
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        {/* <i className="fa fa-search fa-fw"> </i> */}
                        <IoSearchOutline size={46} />
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
                  {/* <i className="fa fa-arrow-right"></i> */}
                  <IoArrowForwardSharp size={30} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
