import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    moviesList: [],
    movieFullList: [],
    movie: [],
  },
  reducers: {
    getCategoryMovies(category) {
      return category;
    },
    setCategoryMovies: (state, action) => {
      state.movieFullList = action.payload;
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
  },
});

export const { getMovies, setMovies, setMovie, getMovie, getCategoryMovies, setCategoryMovies } = movieSlice.actions;

export default movieSlice.reducer;
