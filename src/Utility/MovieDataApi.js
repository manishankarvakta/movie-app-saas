import axios from "axios";

const MovieDataApi = () => {
  console.log(process.env.REACT_APP_TMDB_ENDPOINT);
  const requestMovies = async (url, setData) => {
    await axios
      .get(url)
      .then((res) => setData(res.data))
      .catch((error) => {
        console.error(error);
      });
  };

  const generateMovieDBUrl = (path) => {
    const url = `${process.env.REACT_APP_TMDB_ENDPOINT}/3${path}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
    //   const url = `${MOVIE_DB_ENDPOINT}/3${path}?api_key=${MOVIE_DB_API}`;
    return url;
  };

  // Invoke a different function for search movies
  const searchMovie = (value, setData) => {
    const url = generateMovieDBUrl("/search/movie") + "&query=" + value;
    requestMovies(url, setData);
  };

  // Invoke a different function for search movies
  const upCommingMovie = (setData) => {
    const url = generateMovieDBUrl("/movie/upcoming");
    // const render = renderMovies.bind({ title: "Upcoming Movies" });
    requestMovies(url, setData);
  };

  const getTopRatedMovies = (setData) => {
    const url = generateMovieDBUrl(`/movie/top_rated`);
    // const render = renderMovies.bind({ title: "Top Rated Movies" });
    requestMovies(url, setData);
  };

  // Invoke a different function for search movies
  const getTrendingMovies = (setData) => {
    const url = generateMovieDBUrl("/trending/movie/day");
    // const render = renderMovies.bind({ title: "Trending Movies" });
    requestMovies(url, setData);
  };

  const similarMovie = (movie_id, setData) => {
    const url = generateMovieDBUrl("/movie/" + movie_id + "/similar");
    // const render = renderMovies.bind({ title: "You May Like Similar Movies" });
    requestMovies(url, setData);
  };

  // CAST
  const movieCredits = (movie_id, setData) => {
    const url = generateMovieDBUrl("/movie/" + movie_id + "/credits");
    // const render = renderMovies.bind({ title: "You May Like Similar Movies" });
    requestMovies(url, setData);
  };

  // Details
  const movieDetails = (movie_id, setData) => {
    console.log(movie_id, setData);
    const url = generateMovieDBUrl("/movie/" + movie_id);
    // const render = renderMovies.bind({ title: "You May Like Similar Movies" });
    requestMovies(url, setData);
  };

  const getMovieGenre = (setData) => {
    const url = generateMovieDBUrl("/genre/movie/list");
    console.log(url);
    requestMovies(url, setData);
  };

  const getMovieByGenre = (id, setData) => {
    const url = generateMovieDBUrl("/discover/movie") + "&with_genres=" + id;
    // const render = renderMovies.bind({ title: name + " Movie" });
    requestMovies(url, setData);
  };

  return {
    requestMovies,
    generateMovieDBUrl,
    searchMovie,
    upCommingMovie,
    getTopRatedMovies,
    getTrendingMovies,
    similarMovie,
    getMovieGenre,
    getMovieByGenre,
    movieCredits,
    movieDetails,
  };
};

export default MovieDataApi;
