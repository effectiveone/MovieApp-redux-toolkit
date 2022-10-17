import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Typography, Button } from "@mui/material";
import useStyles from "../styles";
import { getMovie } from "../redux/feature/movieSlice";
import ReactStars from "react-rating-stars-component";
import { getNodeText } from "@testing-library/react";
import "./Movie.style.css";
import uuid from 'react-uuid';
import Layout from "../Layout";
import {ReactHeight} from 'react-height';
import { favAdd } from "../redux/feature/favSlice";



const Movie = () => {
  const dispatch = useDispatch();
  const { movie } = useSelector((state) => ({ ...state.movie }));
  const [icon, setIcon] = useState("XX");

  const FavHanlder = () => {
    setIcon("ZZ");
    dispatch(
      favAdd({
        id: movie.id,
        img: movie.img,
        title: movie.title,
        type: movie.type,
        release_date: movie.release_date,
        rate: movie.rate,
      })
      
    );
  };

  const classes = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();
 
  useEffect(() => {
    if (id) {
      dispatch(getMovie(id));
    }
  }, [id]);

  useEffect(() => {
    document.querySelector('body').style.backgroundColor = '#ffb92a';
 }, []);



 // solving position absolute
 const [childHeight, setChildHeight] = useState()
 const [childHeightImage, setChildHeightImage] = useState()
 const [parentDivHeight, setParentDivHeight] = useState()

useEffect(()=>{

  
{  setParentDivHeight(childHeight )}
  console.log("parentDivHeight", parentDivHeight)

},[childHeight, childHeightImage, parentDivHeight])
const time = new Date(movie.release_date)
  return (
    <>
    
  <Layout>
    <div style={{paddingBottom: "200px", height: parentDivHeight}}>
    <div className="container" style={{backgroundImage: movie.backdrop_path ? `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})` : "", 
 backgroundRepeat: "no-repeat",
 backgroundSize: "cover",
 height: "500px",
 backgroundColor: "black"
 }}>
      <div className="wrapper" style={{bottom: "-50px",        
}}>
    <div className="fav" onClick={() => FavHanlder()}>
        {icon}
        </div>
    
    <section  style={{backgroundColor: "grey", width: "90%" }}>
    <ReactHeight onHeightReady={height => setChildHeightImage(height)}>

    <div className="Template">
<div><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width="200px" height="300px"/></div>
    
      <div>
        <Typography align="left" variant="h3" gutterBottom component="h2">
          {movie.original_title}
        </Typography>
     <div>   <div className="rating">
               <ReactStars
     count={10}
     value={movie.vote_average}

     size={20}
     isHalf={true}
     emptyIcon={<i className="far fa-star"></i>}
     halfIcon={<i className="fa fa-star-half-alt"></i>}
     fullIcon={<i className="fa fa-star"></i>}
     activeColor="#ffd700"
   /><p style={{fontSize: "20px"}}>/{movie.vote_count}votes</p></div>
               </div> 
        <Typography align="left" variant="h5" gutterBottom component="h5">
          Year: {time?.getFullYear()}
        </Typography>
        <div className="genre">
                {movie?.genres?.map((gen, i) => (
 <div key={uuid()} onClick={() => navigate(`/category/${gen.id}`)}>
 {gen.name}
 </div>
                 ))}</div>
        </div>
        </div>
<div>
        <Typography align="left" variant="body1" gutterBottom component="p">
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
    </Layout>

      </>
  );
};

export default Movie;
