import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';
import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';




export default function Footer() {
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
  return (
    <footer style={{backgroundImage:  `url(/bg.webp)`}}>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Category</Box>
            {  ["Home", "Contact", "usTerm of services", "About us"].map(z =>(
                <Box>
                <Link href="/" color="inherit">
                 {z}
                </Link>
              </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Account</Box>
              {[
                "Live",
                "FAQ",
                "Premium",
                "Pravacy policy"
              ].map(z =>(
                <Box>
                <Link href="/" color="inherit">
                 {z}
                </Link>
              </Box>
              ))}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>Messages</Box>
 {[
       "You must watch",
       "Recent release",
       "Top IMDB" ].map(z =>(
        <Box>
        <Link href="/" color="inherit">
         {z}
        </Link>
      </Box>
      ))
       }
            </Grid>
          </Grid>
          <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
         MovieApp    &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  );
}