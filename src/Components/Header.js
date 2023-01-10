import React from "react";
import Nav from "./Nav";
import Search from "./Search";

function Header(props) {
  return (
    <header>
      {/* <!-- nav --> */}
      <Nav />

      {/* <!-- search area --> */}
      <Search />
    </header>
  );
}

export default Header;
