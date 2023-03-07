import React from 'react';
import "./Navbar.css";
import {Link} from "react-router-dom"

const Navbar = ({search}) => {
    
    const onSearch = (word) =>{
        search(word)
    } 
  return (
    <nav className="navigation">
    <input type="checkbox" className="menu-btn" id="menu-btn"/>
    <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
    </label>


    <a href="/" className="logo">
        Movies <span>.hd</span>
    </a>



    <ul className="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Genre</a></li>
        <li><a href="#">TV Shows</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">Contact</a></li>
    </ul>


    <form action="" className="search-box">
        <input 
            type="text" 
            name="search" 
            placeholder="Search Movies" 
            className="search-input" required
            onChange={(e)=> onSearch(e.target.value)}
        />
        <button type="submit">
            <i className="bi bi-search"></i>
        </button>
    </form>


</nav>
  )
}

export default Navbar
