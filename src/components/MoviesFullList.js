import React, {useState, useEffect} from "react";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import uuid from 'react-uuid';

const MoviesFullList = () => {
  const { movieFullList } = useSelector((state) => ({ ...state.movie }));




  return (
    <div>
      <Grid sx={{ flexGrow: 1 }} container>
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={3}>
            {movieFullList?.Search?.map((item, index) => (
              <Grid key={uuid()} item>
                <Card sx={{ maxWidth: "350" }}>
                  <Link to={`/movie/${item.id}`}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={item.Poster}
                      alt={item.Title}
                    />
                    <CardContent>
                      <Typography variant="body2" color="text.primary">
                        {item.Title}
                      </Typography>
                      <Typography variant="body2" color="text.primary">
                        ({item.Year})
                      </Typography>
                    </CardContent>
                  </Link>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MoviesFullList;


