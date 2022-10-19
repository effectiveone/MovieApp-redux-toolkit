import React from "react";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import uuid from 'react-uuid';
import apiConfig from "../redux/apiConfig";

const MoviesList = () => {
  const { moviesList } = useSelector((state) => ({ ...state.movie }));
  return (
    <div style={overlay}>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {moviesList?.results?.map((item, index) => {
                const time = new Date(item.release_date)
              return(
              <Grid key={uuid()} item>
                <Card sx={{ maxWidth: "350" }}>
                  <Link to={`/movie/${item.id}`}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={`${apiConfig.w500Image(item.poster_path)}`}
                      //   alt={item.Title}
                      />
                      <CardContent>
                      <Typography variant="body2" color="black" >
                          {item.original_title}
                        </Typography>
                        <Typography variant="body2" color="black" >
                          ({time?.getFullYear()})</Typography>
                          </CardContent>
                    </Link>
                  </Card>
                   
                   
              </Grid>
            )})}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MoviesList;


const overlay = {
  width: "550px",
    position: "fixed",
    top: "80px",
    right: 100,
    bottom: 0,
    background: "rgba(57, 55, 72, 0.22)",
    zIndex: 30,
    overflow: "scroll"
}