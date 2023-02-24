import React, { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import "./Main.style.css";
const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
import uuid from 'react-uuid';

function MainList({ category }) {
  const [listMovie, setListMovie] = useState([])

  useEffect(() => {
    axios.get(`${API_ENDPOINT}&s=${category}`).then(resp => {

      setListMovie(resp.data?.Search)
    })
  }, [])

  return (
    <div className="app">
      <div className="app__background"></div>
      <div className="app__inner">
        <div className="slider">
          <ul className="slider__list">
            {listMovie.map((movie, i) => (
              <React.Fragment key={uuid()}>
                <li

                  className="slider__item"
                  style={{
                    transform: `translateX(${i === 0 ? 45.5 : 45.5 + 17.3 * i
                      }rem)`
                  }}
                >

                  <img src={movie.Poster}
                    height="350"
                  />
                </li>
              </React.Fragment>
            ))}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default MainList



