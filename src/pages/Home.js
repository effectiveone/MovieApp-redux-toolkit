import React, { useEffect } from "react";

import data from "../components/block.json";
import CategoryList from "../components/Sections/CategoryList";
import CallToAction from "../components/Sections/CallToAction";
import uuid from "react-uuid";
import TheMostPopular from "../components/Sections/TheMostPopular";
import Upcoming from "../components/Sections/Upcoming";
import Slider from "../components/Slider/Slider";
import { Parallax, Background } from "react-parallax";
import Layout from "../Layout";
import { Container } from "@mui/material";
import Hero from "../components/Hero/Hero";

const Home = () => {
  useEffect(() => {
    document.querySelector("body").style.backgroundColor = "white";
  }, []);

  return (
    <>
      <Layout>
        <Hero />
        <Parallax strength={500}>
          <Background className="custom-bg">
            <div
              style={{
                height: 2000,
                width: 2000,
                backgroundImage: "url('/popcorn.webp')",
              }}
            />
          </Background>
          <Container>
            <Slider />
            <TheMostPopular />
            <Upcoming />
          </Container>
        </Parallax>
        <CallToAction />
        <Container>
          {data.map((cat, ind) => (
            <React.Fragment key={uuid()}>
              <CategoryList category={cat.category} name={cat.name} />
            </React.Fragment>
          ))}
        </Container>
      </Layout>
    </>
  );
};

export default Home;
