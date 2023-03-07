import React from 'react'
import {Link} from "react-router-dom";
import IMDB from "../Images/IMDb-icon.png"

const PostBox = ({mov}) => {
  return (
    <Link to={`/movie/${mov.id}`}>
        <div className="post-box">
            <div className="post-img">
                <img src={`https://image.tmdb.org/t/p/w500` + mov.poster_path}/>
            </div>
            <div className="main-slider-text">
                <span className="quality">Full HD</span>
                <div className="bottom-text">
                    <div className="movie-name">
                        <span>{mov.release_date}</span>
                        <a href="#">{mov.original_title}</a>
                    </div>
                    <div className="category-rating">
                        <div className="category">
                            <a href="#">horror</a>,<a href="#">mistery</a>, <a href="#">thriller</a>
                        </div>
                        <div className="rating">
                            {mov.vote_average} <img src={IMDB} alt="imdb"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default PostBox
