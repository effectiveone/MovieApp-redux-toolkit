import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import MovieReducer from "./feature/movieSlice";
import favSlice from "./feature/favSlice";
import appReducer from "./feature/categorySlice";
import rootSaga from "./rootSaga";
import { combineReducers } from "redux";

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  category: appReducer,
  movie: MovieReducer,
  favorite: favSlice,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
