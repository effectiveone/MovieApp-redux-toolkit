import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button } from "@mui/material";
import useStyles from "../styles";
import { getMovie } from "../redux/feature/movieSlice";
import { getCrew } from "../redux/feature/movieSlice";
import ReactStars from "react-rating-stars-component";
import "./Movie.style.css";
import uuid from "react-uuid";
import Layout from "../Layout";
import { ReactHeight } from "react-height";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { IconContext } from "react-icons";
import apiConfig from "../redux/apiConfig";
import useFavorite from "../utils/hooks/useFavorite";
const API_ENDPOINT = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}&language=en-US&page=1`;

const Movie = () => {
  const { likes, FavHandler } = useFavorite(API_ENDPOINT);
  const dispatch = useDispatch();

  const { movie, crew } = useSelector((state) => ({ ...state.movie }));

  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
      dispatch(getCrew(id));
    }
  }, [id]);

  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "#ffb92a";
  }, []);

  // solving position absolute
  const [childHeight, setChildHeight] = useState();
  const [childHeightImage, setChildHeightImage] = useState();
  const [parentDivHeight, setParentDivHeight] = useState();

  useEffect(() => {
    {
      setParentDivHeight(childHeight);
    }
  }, [childHeight, childHeightImage, parentDivHeight]);
  const time = new Date(movie.release_date);

  return (
    <>
      <Layout>
        <div style={{ paddingBottom: "200px", height: parentDivHeight }}>
          <div
            className="container"
            style={{
              backgroundImage: movie.backdrop_path
                ? `url(${apiConfig.w500Image(movie.backdrop_path)})`
                : "",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              height: "500px",
              backgroundColor: "black",
            }}
          >
            <div className="wrapper" style={{ bottom: "-50px" }}>
              <section style={{ backgroundColor: "grey", width: "90%" }}>
                <ReactHeight
                  onHeightReady={(height) => setChildHeightImage(height)}
                >
                  <div className="Template">
                    <div>
                      <img
                        src={`${apiConfig.w500Image(movie.poster_path)}`}
                        width="200px"
                        height="300px"
                      />
                    </div>

                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row-reverse",
                          float: "left",
                        }}
                      >
                        <div>
                          <IconContext.Provider
                            value={{ color: "red", size: "50px" }}
                          >
                            <div
                              className="fav"
                              onClick={() => FavHandler(movie)}
                            >
                              {likes.includes(movie.id) ? (
                                <MdFavorite />
                              ) : (
                                <MdFavoriteBorder />
                              )}
                            </div>
                          </IconContext.Provider>{" "}
                        </div>
                        <Typography
                          align="left"
                          variant="h3"
                          gutterBottom
                          component="h2"
                        >
                          {movie.original_title}({time?.getFullYear()})
                        </Typography>
                      </div>

                      <div>
                        <div
                          className="rating"
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            float: "left",
                            alignItems: "center",
                          }}
                        >
                          <ReactStars
                            count={10}
                            value={movie.vote_average}
                            size={20}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                          />
                          <p style={{ fontSize: "20px" }}>
                            /{movie.vote_count}votes
                          </p>
                        </div>
                      </div>

                      <div className="genre" style={{ clear: "both" }}>
                        {movie?.genres?.map((gen, i) => (
                          <div
                            key={uuid()}
                            onClick={() => navigate(`/category/${gen.id}`)}
                          >
                            {gen.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "10px 20px 10px 20px" }}>
                    <Typography
                      align="left"
                      variant="body1"
                      gutterBottom
                      component="p"
                    >
                      {movie.overview}
                    </Typography>

                    <Button variant="contained" onClick={() => navigate("/")}>
                      Go Back
                    </Button>
                  </div>
                </ReactHeight>
              </section>
            </div>
          </div>
        </div>
        <h2> Crew</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
          {crew?.payload?.crew
            ?.filter((z) => z.profile_path)
            .map((cre) => (
              <React.Fragment key={uuid()}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px 20px 10px 20px",
                  }}
                >
                  <img
                    src={`${apiConfig.w500Image(cre.profile_path)}`}
                    style={{ borderRadius: "100%" }}
                    width="100px"
                    height="100px"
                  />
                  <p style={{ color: "red" }}> {cre.name}</p>
                </div>
              </React.Fragment>
            ))}
        </div>

        <h2> Cost</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)" }}>
          {crew?.payload?.cast
            ?.filter((z) => z.profile_path)
            .map((cre) => (
              <React.Fragment key={uuid()}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px 20px 10px 20px",
                  }}
                >
                  <img
                    src={`${apiConfig.w500Image(cre.profile_path)}`}
                    style={{ borderRadius: "100%" }}
                    width="100px"
                    height="100px"
                  />
                  <p style={{ color: "red" }}> {cre.name}</p>
                </div>
              </React.Fragment>
            ))}
        </div>
      </Layout>
    </>
  );
};

export default Movie;
