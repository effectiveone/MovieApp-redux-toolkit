import React, {useState, useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { favAdd } from "../../redux/feature/favSlice";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Swiper.style.css";

import ReactStars from "react-rating-stars-component";
import uuid from 'react-uuid';

import { Card, CardMedia, Grid, CardContent, Typography } from "@mui/material";
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';
import { IconContext } from 'react-icons';
import apiConfig from "../../redux/apiConfig"
const API_ENDPOINT = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}&language=en-US&page=1`;


function TheMostPopular() {
const [listMovie, setListMovie] =useState([])
const favorites = useSelector((state) => state?.favorite?.fav);

const dispatch = useDispatch();


  useEffect(()=> {
    axios.get(`${API_ENDPOINT}`).then(resp =>  {

        setListMovie(resp.data?.results)
    } )
  }, [])

 
  const [likes, setLikes] = useState([]);

useEffect(() => {
const zonk =  Object.values(favorites.map(z => z.id))
setLikes(likes=>([
  ...likes,
  ...zonk]
))
},
  [favorites])

  const FavHanlder = (item, index) => {
    setLikes(likes=>([
      ...likes,
       item.id]
   ))
    // setLikes(...likes, item.id);
    dispatch(
      favAdd({
        id: item.id,
        img: item.poster_path,
        title: item.title,
        type: item.type,
        release_date: item.release_date,
        rate: item.vote_average,
      })
      
    );
  };
 

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

          <h2>The Most Popular</h2>
        
                <Swiper
      {...params}
      >
            {listMovie?.map((item, index) =>{
const time = new Date(item.release_date)

             return(
              <React.Fragment key={uuid()}>
                 <SwiperSlide >
              <Grid  item className="items">
                <Card sx={{ maxWidth: "350" }}>
                  <div className="favorite">
                  <IconContext.Provider
      value={{ color: 'red', size: '30px' }}
    >
      <div className="fav" onClick={() => FavHanlder(item, index)}>
      {likes.includes(item.id) ?  <MdFavorite/> : <MdFavoriteBorder/>}
        </div>
        </IconContext.Provider>                  </div>
                  <Link to={`/movie/${item.id}`}>
                    <CardMedia
                      component="img"
                      height="350"
                      image={`${apiConfig.w500Image(item.poster_path)}`}
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
                        ({time?.getFullYear()})
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
            )})}
            </Swiper>
      
   
    </>)
}

export default TheMostPopular