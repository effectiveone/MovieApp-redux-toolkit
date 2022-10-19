import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apiConfig from "../apiConfig";
import axios from "axios";

export const getCategoryMovies = createAsyncThunk(
  "category/getCategoryMovies",
  () => {
    return fetch(`${apiConfig.category}`)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);

        return response.json();
      })

      .then((json) => json);
  }
);

export const categorySlice = createSlice({
  name: "category",

  initialState: {
    loading: false,

    hasErrors: "",

    category: [],
  },

  extraReducers: {
    [getCategoryMovies.pending]: (state) => {
      state.loading = true;
    },

    [getCategoryMovies.rejected]: (state, action) => {
      state.loading = false;

      state.hasErrors = action.error.message;
    },

    [getCategoryMovies.fulfilled]: (state, { payload }) => {
      state.category = payload;

      state.loading = false;
    },
  },
});

export const postsSelector = (state) => state.category;

const appReducer = categorySlice.reducer;

export default appReducer;
