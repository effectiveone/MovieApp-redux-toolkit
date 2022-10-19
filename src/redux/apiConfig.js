const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3",
  apiKey: process.env.REACT_APP_API_KEY,
  Upcoming_movie: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}`,
  Top_rated_movie: `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}&language=en-US&page=1`,
  category: `http://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}`,
  API_ENDPOINT: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}`,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
