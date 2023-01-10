import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TopMovies from "../Components/TopMovies";
import TrendingMovies from "../Components/TrendingMovies";
import UpcomingMovies from "../Components/UpcomingMovies";

function Home(props) {
  return (
    <div className="main-wrapper">
      <Header />
      <UpcomingMovies />
      <TrendingMovies />
      <TopMovies />

      <Footer />
    </div>
  );
}

export default Home;
