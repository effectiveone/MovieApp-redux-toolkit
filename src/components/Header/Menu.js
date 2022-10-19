import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import uuid from 'react-uuid';
import "./Menu.style.css";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryMovies } from "../../redux/feature/categorySlice";





function Menu() {

const [visibleCategory, setVisibleCategory] = useState(false)
const navigate = useNavigate();

  return (
    <nav className="nav">
    <ul className="nav__menu">
      <li className="nav__menu-item">
      <a onClick={() => navigate(`/`)}>Home</a>
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
      <a onClick={() => navigate(`/favorite`)}>Favorite</a>
      </li>
    </ul>
  </nav>
  )
}

const SubMenuCategory = () => {
    const [listMovie, setListMovie] =useState([])
    const dispatch = useDispatch();


    const { category, loading, error } = useSelector(state=>state.category);
    
    useEffect(() => {
    
    dispatch(getCategoryMovies());
    
    }, [dispatch]);
const navigate = useNavigate();


  useEffect(()=> {

        setListMovie(category?.genres)
  },  [category])



      return (
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

