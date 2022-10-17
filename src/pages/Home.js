import React, {useEffect} from "react";

import data from "../components/block.json"
import CategoryList from "../components/CategoryList";
import CallToAction from '../components/CallToAction';
import uuid from 'react-uuid';
import TheMostPopular from '../components/TheMostPopular';
import Upcoming from '../components/Upcoming';
import Slider from '../components/Slider';
import { Parallax, Background } from "react-parallax";
import Layout from "../Layout";
import { Container } from "@mui/material";
import Hero from "../components/Hero/Hero";

const Home = () => {
  useEffect(() => {
    document.querySelector('body').style.backgroundColor = 'white';
 }, []);
  return (
    <>
   <Layout>
    <Hero/>
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
