import { takeLatest, put, fork, call } from "redux-saga/effects";
import { fetchMovie, fetchMovies, fetchAllMovie } from "./api";
import { getMovie, getMovies, setMovie, setMovies, getCategoryMovies, setCategoryMovies } from "./feature/movieSlice";

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovieAsync({ payload }) {
  try {
    const movieId = payload;
    const response = yield call(fetchMovie, movieId);
    if (response.status === 200) {
      yield put(setMovie({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}


function* onLoadCategoryMoviesAsync({ payload }) {
  try {
    const categoryName = payload;

    const response = yield call(fetchAllMovie, categoryName);
    if (response.status === 200) {
      yield put(setCategoryMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadCategoryMovies() {
  yield takeLatest(getCategoryMovies.type, onLoadCategoryMoviesAsync);
}

function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMovieAsync);
}

export const moviesSagas = [fork(onLoadMovies), fork(onLoadMovie), fork(onLoadCategoryMovies)];
