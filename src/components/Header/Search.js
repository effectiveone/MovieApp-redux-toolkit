import React, { useState, useEffect, useRef } from "react";
import * as ReactDOM from 'react-dom';
import { TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import useStyles from "../../styles";
import { getMovies } from "../../redux/feature/movieSlice";
import MoviesList from "./Portal/MoviesList"; 
import InputAdornment from '@mui/material/InputAdornment';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import "./Search.style.css"

const Search = (props) => {
  const [name, setName] = useState("spider");
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const {
    moviesList: { Error: error },
  } = useSelector((state) => ({ ...state.movie }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies(name));
  }, [name]);
  const navigate = useNavigate();

  const inputElement = useRef();

const Portals = () => {
  if (!open) return null;
  return ReactDOM.createPortal(
<MoviesList/> ,document.body);
  }

  useEffect(() => {
    window.onclick = (event) => {
      if (event.target.contains(inputElement.current)
        && event.target !== inputElement.current) {     
          setOpen(false)
      }
    }
}, []);



  return (
  
    <>

      <form  onSubmit={(e) => e.preventDefault()}
    
      >
        <TextField
          ref={inputElement}
          type="text"
          // fullWidth
          value={name}
          className="input trans"
          style={{ backgroundColor: "white"}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
              <AiOutlineSearch onClick={
        () =>    navigate(`/search/${name}`)}/>
              </InputAdornment>
            ),
          }}
          // sx={{ m: 1, }}
          onChange={({target: {value}}) => {
            setName(value)
            setOpen(true)
          }}
        />
        {error && <p className={classes.error}>{error}</p>}
      </form>


<Portals/>
      
    </>
  );
};

export default Search;
