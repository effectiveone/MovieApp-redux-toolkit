import axios from "axios";
import apiConfig from "./apiConfig";

const { baseUrl, API_ENDPOINT, category } = apiConfig

export const fetchMovies = async (movieName) =>
  axios.get(`${API_ENDPOINT}&query=${movieName}`);

export const fetchAllMovie = async (categoryID) =>
  axios.get(
    `${baseUrl}/discover/movie?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=1990-01-01&primary_release_date.lte=1999-12-31&vote_average.gte=6&with_genres=${categoryID}`
  );

export const fetchMovie = async (movieId) =>
  axios.get(
    `${baseUrl}/movie/${movieId}?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}`
  );

export const fetchCrew = async (movieId) =>
  axios.get(
    `${baseUrl}/movie/${movieId}/credits?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}`
  )

  export const fetchCategory = async (movieId) =>
  axios.get(
    `${category}`
  )

 