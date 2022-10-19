import React, {useEffect} from "react";

import data from "../components/block.json"
import CategoryList from "../components/Sections/CategoryList";
import CallToAction from '../components/Sections/CallToAction';
import uuid from 'react-uuid';
import TheMostPopular from '../components/Sections/TheMostPopular';
import Upcoming from '../components/Sections/Upcoming';
import Slider from '../components/Slider/Slider';
import { Parallax, Background } from "react-parallax";
import Layout from "../Layout";
import { Container } from "@mui/material";
import Hero from "../components/Hero/Hero";
import { useSelector, useDispatch } from "react-redux";
import { getTheMostPopular } from "../redux/feature/movieSlice";


const Home = () => {
  useEffect(() => {
    document.querySelector('body').style.backgroundColor = 'white';
 }, []);


//  const dispatch = useDispatch();

// const { movieMostPopular, Upcoming_movie } = useSelector((state) => ({ ...state.movie }));
// useEffect(() => {

//     dispatch(getTheMostPopular());
  
// }, []);
  return (
    <>
   <Layout>
    <Hero/>

    {/* <CategoryList category={movieMostPopular.results} name="The most popular movie"/>
    <CategoryList category={Upcoming_movie.results} name="Upcoming movie"/> */}

   <Parallax strength={500}>
      <Background className="custom-bg">
        <div
          style={{
            height: 2000,
            width: 2000,
            backgroundImage: "url('/popcorn.webp')"
          }}
        />
      </Background>

    
    <Container>
 <Slider/>
<TheMostPopular/>
    <Upcoming/>
</Container>
</Parallax>
<CallToAction/>
<Container>
{data.map((cat, ind)=>(
        <React.Fragment key={uuid()}>
              <CategoryList category={cat.category} name={cat.name}/>
              </React.Fragment>
      ))}
      </Container>
</Layout>
    </>
  );
};

export default Home;
