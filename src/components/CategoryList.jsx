import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Controller } from "swiper";
import ReactStars from "react-rating-stars-component";
import uuid from 'react-uuid';
import "swiper/css";
import "./Swiper.style.css";
import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const API_ENDPOINT = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}`;


function CategoryList({category, name}) {
const [listMovie, setListMovie] =useState([])


  useEffect(()=> {
    axios.get(`${API_ENDPOINT}&query=${category}`).then(resp =>  {

        setListMovie(resp.data?.results)
    } )
  }, [])

 


 

  const params = {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".custom_next",
        prevEl: ".custom_prev"
      }
  };
  return (
    <>

          <h2>{name}</h2>
        
                <Swiper
      {...params}
      >
            {listMovie?.map((item, index) => (
              <React.Fragment key={uuid()}>
                 <SwiperSlide >
              <Grid  item className="items">
                <Card sx={{ maxWidth: "350" }}>
                  <Link to={`/movie/${item.id}`}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    //   alt={item.Title}
                    />
                    <CardContent>
                
                    </CardContent>
                  </Link>
                </Card>
                <div className="title">     
                 <Typography variant="body2" color="white" >
                        {item.original_title}
                      </Typography>
                      <Typography variant="body2" color="white" >
                        ({item.release_date})
                      </Typography>
                      <div style={{display: "flex", float: "left", paddingLeft: "10px", paddingRight: "10px"}}>
                      <ReactStars
    count={10}
    value={item.vote_average}

    size={10}
    isHalf={true}
    emptyIcon={<i className="far fa-star"></i>}
    halfIcon={<i className="fa fa-star-half-alt"></i>}
    fullIcon={<i className="fa fa-star"></i>}
    activeColor="#ffd700"
  /><p style={{fontSize: "5px"}}>/{item.vote_count}votes</p></div>
</div>
              </Grid>
              </SwiperSlide>
              </React.Fragment>
            ))}
            </Swiper>
      
   
    </>)
}

export default CategoryList