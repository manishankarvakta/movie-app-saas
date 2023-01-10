const BASE_URL = (path) => {
  const url = `${process.env.TMDB_ENDPOINT}/3${path}?api_key=${process.env.TMDB_API_KEY}`;
  return url;
};

export default BASE_URL;
