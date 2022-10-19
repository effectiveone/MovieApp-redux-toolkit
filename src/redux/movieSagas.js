import { takeLatest, put, fork, call } from "redux-saga/effects";
import { fetchMovie, fetchMovies, fetchAllMovie, fetchCrew } from "./api";
import {
  getCrew,
  setCrew,
  getMovie,
  getMovies,
  setMovie,
  setMovies,
  getCategoryMovies,
  setCategoryMovies,
} from "./feature/movieSlice";

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

function* onLoadCrewAsync({ payload }) {
  try {
    const crewID = payload;
    const response = yield call(fetchCrew, crewID);
    if (response.status === 200) {
      yield put(setCrew({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadCategoryMoviesAsync({ payload }) {
  try {
    const categoryName = payload;
console.log("fetchAllMovie", fetchAllMovie)
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

function* onLoadCrew() {
  yield takeLatest(getCrew.type, onLoadCrewAsync);
}
export const moviesSagas = [
  fork(onLoadMovies),
  fork(onLoadCrew),
  fork(onLoadMovie),
  fork(onLoadCategoryMovies)
];
