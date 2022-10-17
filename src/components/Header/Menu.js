import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import uuid from 'react-uuid';
import "./Menu.style.css";
import axios from "axios"
import { takeLatest } from 'redux-saga/effects';

function Menu() {
const [visibleCategory, setVisibleCategory] = useState(false)

const navigate = useNavigate();

  return (
    <nav className="nav">
    <ul className="nav__menu">
      <li className="nav__menu-item">
        <a>Home</a>
      </li>
      <li
        className="nav__menu-item"
        onMouseLeave={() => setVisibleCategory(false)}
      >
        <a onMouseEnter={() => setVisibleCategory(true)}>
          Category</a>
        { visibleCategory && <SubMenuCategory /> }
      </li>
      <li className="nav__menu-item">
        <a>Contact</a>
      </li>
    </ul>
  </nav>
  )
}

const SubMenuCategory = () => {
    const [listMovie, setListMovie] =useState([])

const navigate = useNavigate();


  useEffect(()=> {
    axios.get(`http://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}`).then(resp =>  {

        setListMovie(resp?.data?.genres)
    } )
  },  [])
      return (
    //             {listMovie?.slice(0,6).map((opt, i) => (
    //                        <li className="nav__submenu-itemA " key={uuid()}>
    //                        <a onClick={() => navigate(`/category/${opt.id}`)}>  {opt.name}</a>
    //                      </li>
    // ))}
       <ul className="nav__submenu" key={uuid()}>
          {listMovie.slice(6,13).map((col, i) => {
 return(
                <React.Fragment key={uuid()}>
           <li className="itemA " 
            style={{
                gridRow: `${i+1}`

          }}>
           <a onClick={() => navigate(`/category/${col.id}`)}>  {col.name}</a>
         </li>
         </React.Fragment>
          )})}
          {listMovie.slice(0,6).map((col, i) => {
 return(
                <React.Fragment key={uuid()}>
           <li className="itemB " 
            style={{
                gridRow: `${i+1}`

          }}>
           <a onClick={() => navigate(`/category/${col.id}`)}>  {col.name}</a>
         </li>
         </React.Fragment>
          )})}
                    {listMovie.slice(13,20).map((col, i) => {
 return(
                <React.Fragment key={uuid()}>
           <li className="itemC " 
            style={{
                gridRow: `${i+1}`

          }}>
           <a onClick={() => navigate(`/category/${col.id}`)}>  {col.name}</a>
         </li>
         </React.Fragment>
          )})}




        </ul>


      )
    }


export default Menu

