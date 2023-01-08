import logo from "./logo.svg";
import "./App.css";
import Layout from "./Layout/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Switch, Route, Link, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Nav from "./Components/Nav";
import Login from "./Pages/Login";
import MovieListing from "./Pages/MovieListing";
import Profile from "./Pages/Profile";
import Registration from "./Pages/Registration";
import Search from "./Components/Search";
import Subscription from "./Pages/Subscription";
import WatchVideo from "./Pages/WatchVideo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/movielisting" element={<MovieListing />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/search" element={<Search />} />
      <Route path="/subscription" element={<Subscription />} />
      <Route path="/watchvideo" element={<WatchVideo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
