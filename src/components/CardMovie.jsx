import React from 'react'
import "./CardMovie.style.css"
import { useNavigate } from "react-router-dom";


function CardMovie({title, poster_path, release_date, overview, backdrop_path, id}) {

    const navigate = useNavigate();


    return (
    <div className="movie_card" id="bright">
    <div className="info_section" style={{backgroundImage: backdrop_path ? `url(https://image.tmdb.org/t/p/w500${backdrop_path})` : "",
    backgroundSize: "cover",
    // backgroundColor: "red"
}}>              
      <div className="movie_header" onClick={
        () =>    navigate(`/movie/${id}`)
      }>
        
        <img className="locandina" src={`https://image.tmdb.org/t/p/w500${poster_path}`} width="100" height="150" alt={title}/>
        <h1 style={{color: "white"}}>{title}</h1>
        <h4>{release_date}, David Ayer</h4>
   
      </div>
      <div className="movie_desc">
        <p className="text" style={{color: "white"}}>
   
        </p>
      </div>
    </div>
    <div >     {overview}</div>
  </div>

  )
}

export default CardMovie