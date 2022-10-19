import React, {useState} from 'react';
import "./Search.style.css";
import { useNavigate } from "react-router-dom";

function CallToAction() {
  const navigate = useNavigate();
const [searchObject, setSearchObject] = useState()
  return (
    <div className="search-area" id="search">
    <div className="search-area-content">
        <h2>Can't Find Anything You Like?</h2>
        <p>Search for thousands of unique movies from our growing database...</p>
        <div className="input-area">
            <input type="text" placeholder="Search..." onChange={(e)=> setSearchObject(e.target.value)} />
            <svg fill="currentColor" viewBox="0 0 16 16" onClick={
        () =>    navigate(`/search/${searchObject}`)}>
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
        </div>
    </div>
</div>
  )
}

export default CallToAction