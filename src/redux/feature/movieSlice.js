import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movieFullList: [],
    movie: [],
    crew: [],
    movieMostPopular: [],
    Upcoming_movie: []
  },
  reducers: {
    getUpcomingMovie(category) {
      return category;
    },
    setUpcomingMovie: (state, action) => {
      state.Upcoming_movie = action.payload;
    },
    getCategoryMovies(category) {
      return category;
    },
    setCategoryMovies: (state, action) => {
      state.movieFullList = action.payload;
    },
    getTheMostPopular(category) {
      return category;
    },
    setTheMostPopular: (state, action) => {
      state.movieMostPopular = action.payload;
    },
    getMovies(name) {
      return name;
    },
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },
    getMovie(id) {
      return id;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
    getCrew(id) {
      return id;
    },
    setCrew: (state, action) => {
      state.crew = action;
    },
  },
});

export const {
  getUpcomingMovie,
  setUpcomingMovie,
  getTheMostPopular,
  setTheMostPopular,
  getCrew,
  setCrew,
  getMovies,
  setMovies,
  setMovie,
  getMovie,
  getCategoryMovies,
  setCategoryMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
