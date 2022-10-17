import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite/Favorite";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/search/:id" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
