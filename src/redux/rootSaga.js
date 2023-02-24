import { all } from "redux-saga/effects";
import { moviesSagas } from "./movieSagas";
import favSlice from "./feature/favSlice";

export default function* rootSaga() {
  yield all([...moviesSagas, favSlice]);
}
