import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { favAdd } from "../../redux/feature/favSlice";

const useFavorite = (apiEndpoint) => {
  const [likes, setLikes] = useState([]);
  const favorites = useSelector((state) => state?.favorite?.fav);
  const dispatch = useDispatch();

  useEffect(() => {
    const zonk = Object.values(favorites.map((z) => z.id));
    setLikes((likes) => [...likes, ...zonk]);
  }, [favorites]);

  const FavHandler = (item, index) => {
    setLikes((likes) => [...likes, item.id]);
    dispatch(
      favAdd({
        id: item.id,
        img: item.poster_path,
        title: item.title,
        type: item.type,
        release_date: item.release_date,
        rate: item.vote_average,
      })
    );
  };

  return { likes, FavHandler };
};

export default useFavorite;
