import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCategoryMovies } from "../redux/feature/movieSlice";
import { Grid, Pagination } from "@mui/material";
import Stack from "@mui/material/Stack";
import CardMovie from "../components/CardMovie";
import uuid from "react-uuid";
import Layout from "../Layout";
import Container from "@mui/material/Container";

function Category() {
  const [dataPage, setDataPage] = useState("");

  const dispatch = useDispatch();
  const { movieFullList } = useSelector((state) => ({ ...state.movie }));

  const kupa = useSelector((state) => ({ ...state }));

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getCategoryMovies(id));
      setDataPage(id);
    }
  }, [id]);

  return (
    <>
      <Layout>
        {movieFullList?.results?.map((movie, ind) => (
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
                count={movieFullList?.total_pages}
                variant="outlined"
                shape="rounded"
                color="secondary"
                hidePrevButton
                hideNextButton
                onChange={(e, page) => {
                  const number = parseFloat(page);
                  navigate(`/category/${dataPage}&page=${number}`);
                }}
              />
            </Stack>
          </Grid>
        </Container>
      </Layout>
    </>
  );
}

export default Category;
