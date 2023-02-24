import { useState, useEffect } from "react";
import axios from "axios";
import apiConfig from "../../redux/apiConfig";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryMovies } from "../../redux/feature/categorySlice";

const useHeroSection = () => {
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    axios.get(apiConfig.Top_rated_movie).then((resp) => {
      setMovieItems(resp.data?.results.slice(1, 4));
    });
  }, []);

  const [listCategory, setListCategory] = useState([]);

  const dispatch = useDispatch();

  const { category, loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategoryMovies());
  }, [dispatch]);

  useEffect(() => {
    setListCategory(category?.genres);
  }, [category]);

  return { movieItems, listCategory };
};

export default useHeroSection;
