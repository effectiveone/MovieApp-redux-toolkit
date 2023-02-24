import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../redux/feature/movieSlice";
import { Grid, Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import CardMovie from "../components/CardMovie";
import uuid from "react-uuid";
import Layout from "../Layout";
import Container from "@mui/material/Container";

function Search() {
  const [dataPage, setDataPage] = useState("");
  const dispatch = useDispatch();
  const { moviesList } = useSelector((state) => ({ ...state.movie }));
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getMovies(id));
      setDataPage(id);
    }
  }, [id]);

  return (
    <>
      <Layout>
        {moviesList?.results?.map((movie, ind) => (
          <React.Fragment key={uuid()}>
            <CardMovie
              title={movie.title}
              poster_path={movie?.poster_path}
              release_date={movie.release_date}
              overview={movie.overview}
              backdrop_path={movie.backdrop_path}
              id={movie.id}
            />
          </React.Fragment>
        ))}
        <Container>
          <Grid>
            <Stack spacing={2}>
              <Pagination
                count={moviesList?.total_pages}
                variant="outlined"
                shape="rounded"
                color="secondary"
                hidePrevButton
                hideNextButton
                onChange={(e, page) => {
                  const number = parseFloat(page);
                  navigate(`/search/${dataPage}&page=${number}`);
                }}
              />
            </Stack>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Search;
