import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MoviesList from "./MoviesList";
import { MemoryRouter, Routes, Route } from "react-router-dom";
const mockStore = configureStore([]);

describe("MoviesList component", () => {
  it("should display all movies", () => {
    const moviesList = {
      results: [
        {
          id: 1,
          original_title: "Movie 1",
          release_date: "2022-02-01",
          poster_path: "poster1.png",
        },
        {
          id: 2,
          original_title: "Movie 2",
          release_date: "2021-01-01",
          poster_path: "poster2.png",
        },
      ],
    };
    const store = mockStore({
      movie: {
        moviesList,
      },
    });
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <MoviesList />
        </MemoryRouter>
      </Provider>
    );
    expect(getByText("Movie 1")).toBeInTheDocument();
    expect(getByText("(2022)")).toBeInTheDocument();
    expect(getByText("Movie 2")).toBeInTheDocument();
    expect(getByText("(2021)")).toBeInTheDocument();
  });
});
