import React from "react";
import "./Favorite.css";
import { useSelector } from "react-redux";
import Rating from '@mui/material/Rating';

import { RiDeleteBin6Line } from 'react-icons/ri';
import uuid from 'react-uuid';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { favRemove } from "../../redux/feature/favSlice";
import Layout from "../../Layout"
import { IconContext } from 'react-icons';
const base_url = "https://image.tmdb.org/t/p/original";

function Favorite() {
  const data = useSelector((state) => state?.favorite?.fav);

  const dispatch = useDispatch();

  const truncate = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };


  return (
    <>
    <Layout>

      <div className="layoutfavorite">
        <div className="fav__box" style={{ height: "1000px", color: "black"}}>
  
          {data &&
            data.map((data) => (
              <div className="moviesRow" key={uuid()}>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                <Link to={`/movie/${data?.id}`}>
                  <img src={`${base_url}${data?.img}`} />
                </Link>
                <IconContext.Provider
      value={{ color: 'red', size: '30px' }}
    >
                <div
                  className="fav"
                  onClick={() => dispatch(favRemove(data?.id))}
                >
                  <RiDeleteBin6Line/>
                </div></IconContext.Provider>
</div>
                <div className="movie__info">
                  <div className="movie__name">
                  <span>
                    
                        <Rating name="read-only"
                        style={{color: "red"}}
                         value={data?.rate}
                          readOnly max={10}
                            precision={0.5}/>

                      </span>
                      </div>
                 
                  <div className="movie__other">
                  <h3 style={{color: "red"}}>{truncate(data?.title, 18)}</h3>
                 
                      {data?.release_date}
               
                   
                    <p>{data?.type}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      </Layout>
    </>
  );
}

export default Favorite;
