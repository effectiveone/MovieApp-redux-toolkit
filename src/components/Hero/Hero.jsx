import React from 'react';

import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Hero.style.css';
import { useNavigate } from 'react-router';
import apiConfig from "../../redux/apiConfig"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import uuid from "react-uuid"
import "swiper/swiper.min.css";
import useHeroSection from "../../utils/hooks/useHero"

const Hero = () => {
    const { movieItems } = useHeroSection()
    SwiperCore.use([Autoplay, Navigation, Pagination]);


    return (
        <div className="hero-slide">
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                grabCursor={true}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                pagination={{
                    clickable: true,
                    el: `swiper-container swiper-container-testClass`,
                    bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
                }}
                navigation={true}
            >
                {
                    movieItems.map((item, i) => (
                        <SwiperSlide key={uuid()}>
                            {({ isActive }) => (
                                <HeroSlideItem item={item} className={`${isActive ? 'active' : ''}`} />
                            )}
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    );
}

const HeroSlideItem = props => {
    const { listCategory } = useHeroSection();

    let navigate = useNavigate();
    const item = props.item;
    const background = apiConfig.originalImage(item.backdrop_path ? item.backdrop_path : item.poster_path);

    return (
        <div
            className={`hero-slide__item ${props.className}`}
            style={{ backgroundImage: `url(${background})`, height: "500px" }}
        >

            <Container>
                <Grid>
                    <div className="flex__container  flex--active">
                        <div className="flex__item flex__item--left">
                            <div className="flex__content" style={{ paddingLeft: "100px", paddingRight: "100px" }}>

                                <div className="text--sub">
                                    {item?.genre_ids.map(id => (
                                        <Genre id={id} listCategory={listCategory} key={uuid()} />
                                    ))}

                                </div>


                                <h1 className="text--big">{item.title}</h1>
                                <p className="text--normal">{item.overview}
                                </p>
                                <button onClick={() => navigate('/movie/' + item.id)}>
                                    READ MORE
                                </button>
                            </div>
                            <p className="text__background">{item.title}</p>

                        </div>

                        <div className="flex__item flex__item--right flex-center">
                            <img src={apiConfig.w500Image(item.poster_path)} style={{ width: "60%", height: "60%" }} />

                        </div>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}

export default Hero;

const Genre = ({ id, listCategory }) => {
    const genre = listCategory?.find(genre => genre.id === id);
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            borderStyle: "1px solid",
            float: "left",
            paddingRight: "100px"
        }}>
            <p>{genre?.name}</p>
        </div>
    )
}