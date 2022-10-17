import React, {useState, useEffect} from 'react';
import axios from "axios";
import "./Slider.style.css";
import SliderArrows from './SliderArrows/SliderArrows';
import { useNavigate } from "react-router-dom";


function Slider() {
    const API_ENDPOINT = `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}&language=en-US&page=1`;

    const [numberOfSLider, setNumberOfSLider] = useState(0)

const [listMovie, setListMovie] =useState([])
  useEffect(()=> {
    axios.get(`${API_ENDPOINT}`).then(resp =>  {
console.log("listMovie", resp.data?.results)
        setListMovie(resp.data?.results)
    } )
  }, [])

  const navigate = useNavigate();


  return (
    <>
   

    {listMovie && (
    <section className="section">
<div className="a bigone" 
style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${listMovie[numberOfSLider]?.poster_path})`,
    backgroundSize: "cover",
  position: "relative"
}}
>    
    {/* <img className="locandina" src={`https://image.tmdb.org/t/p/w500${listMovie[numberOfSLider]?.poster_path}`} width="100%" height="100%" /> */}




{listMovie && listMovie.length >= 5 && (
          <>
          {/* <div style={{position: "relative"}}> */}
          {numberOfSLider !== listMovie.length -1 && (
<div style={{position: "absolute",
// transform: "translate(100%, 500%)",
 bottom: "10px", right: "20px", 
 zIndex: 2}}     > 
{numberOfSLider < (listMovie.length -5 ) && (  <SliderArrows
              direction={'right'}
              opacity={numberOfSLider !== listMovie.length - 1 ? 1 : 0}
              handleClick={() => setNumberOfSLider(prev => prev +1)}
            />)}
            </div>
            )}
            {numberOfSLider > 0 && (
              <div style={{position: "absolute", 
            //   transform: "translate(-100%, 500%)",
              bottom: "10px", right: "50px",
               zIndex: 2}}     >   
            <SliderArrows
              direction={'left'}
              opacity={numberOfSLider !== 0 ? 1 : 0}
              handleClick={() => setNumberOfSLider(prev => prev -1)}
            /></div>
            )}
{/* </div> */}
          </>
        )}
        <div className="description">
        <div className="rank">
        {listMovie[numberOfSLider]?.vote_average}
        </div>
        <h2
        onClick={
            () =>    navigate(`/movie/${listMovie[numberOfSLider]?.id}`)
          }
        >{listMovie[numberOfSLider]?.title}</h2>

       
        </div>
    
</div>
<div class="a two"
style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${listMovie[numberOfSLider + 1]?.poster_path})`,
    backgroundSize: "cover",
  position: "relative"
}}
>    
<div className="description">
        <div className="rank">
        {listMovie[numberOfSLider +1]?.vote_average}
        </div>
        <h2
        onClick={
            () =>    navigate(`/movie/${listMovie[numberOfSLider+1]?.id}`)
          }
        >{listMovie[numberOfSLider +1]?.title}</h2>

       
        </div>
</div>
<div class="a three"
style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${listMovie[numberOfSLider + 2]?.poster_path})`,
    backgroundSize: "cover",
  position: "relative"
}}
>    
<div className="description">
        <div className="rank">
        {listMovie[numberOfSLider +2]?.vote_average}
        </div>
        <h2
        onClick={
            () =>    navigate(`/movie/${listMovie[numberOfSLider +2]?.id}`)
          }
        >{listMovie[numberOfSLider +2]?.title}</h2>

       
        </div>
</div>
<div class="a four"
style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${listMovie[numberOfSLider + 3]?.poster_path})`,
    backgroundSize: "cover",
  position: "relative"
}}
>   
<div className="description">
        <div className="rank">
        {listMovie[numberOfSLider +3]?.vote_average}
        </div>
        <h2
        onClick={
            () =>    navigate(`/movie/${listMovie[numberOfSLider +3]?.id}`)
          }
        >{listMovie[numberOfSLider +3]?.title}</h2>

       
        </div>
</div>
<div class="a five"
style={{
    backgroundImage: `url(https://image.tmdb.org/t/p/w500${listMovie[numberOfSLider + 4]?.poster_path})`,
    backgroundSize: "cover",
  position: "relative"
}}>       
<div className="description">
        <div className="rank">
        {listMovie[numberOfSLider +4]?.vote_average}
        </div>
        <h2
        onClick={
            () =>    navigate(`/movie/${listMovie[numberOfSLider +4]?.id}`)
          }
        >{listMovie[numberOfSLider +4]?.title}</h2>

       
        </div>
</div>

</section>
)}
</>
  )
}

export default Slider