import React, {useState, useEffect}from 'react'
import Search from '../Search'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import uuid from 'react-uuid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


import {
  AppBar,
  Toolbar,
  Typography,
  ThemeProvider,
  CssBaseline,
  createMuiTheme
} from "@material-ui/core";
import ScrollToChangeColor from "./ScrollToChangeColor"  





function Header() {
  const navigate = useNavigate();



 


  const [listMovie, setListMovie] =useState([])


  useEffect(()=> {
    axios.get(`http://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_MOVIE_API_KEY}`).then(resp =>  {

        setListMovie(resp?.data?.genres)
    } )
  },  [])

  const changeCategory = (e) => {
  const target =  e.target.value;
  navigate(`/category/${target}`)
  }

  const theme = createMuiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <ScrollToChangeColor>
    <AppBar position="sticky">
    <div style={header}>


<FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Category</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        label="Category"
        onChange={changeCategory}
      >
    {listMovie?.map((opt, i) => (
        <MenuItem value={opt.id} key={uuid()}>{opt.name} </MenuItem>

    ))}
      </Select>
    </FormControl>

    <button  onClick={() => navigate("/")}>
Movie App
</button>

<Search />
    </div>
    </AppBar>
    </ScrollToChangeColor>
    </ThemeProvider>
  );
}

export default Header

const header = {
    paddingLeft: "100px",
    paddingRight: "100px",
    height: "100px",
    display: "flex",
    justifyContent: 'space-between',


}