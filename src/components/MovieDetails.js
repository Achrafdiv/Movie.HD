import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';
import {Link ,useParams} from "react-router-dom"
import p1jpg from "../Images/p-1.jpg"

const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([])

  //get all movies details
  const getMovieDetails = async () =>{
    const res = await  axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=99df2f0c2566009a62a255d959d2c721&language=en-US`)
    setMovie(res.data)
  }
  useEffect(() =>{
    getMovieDetails()
  },[])

  
  return (
    <Container className='text-light'>
      <Row className='px-3 py-5' style={{backgroundColor:"#171717"}}>
        <Col className='mx-5' sm="4" style={{
          width:"400px"
        }}>
          <img style={{width:"100%"}} src={`https://image.tmdb.org/t/p/w500` + movie.poster_path} />
        </Col>
        <Col>
          <h2 className='py-2'>Movie Name : {movie.original_title}</h2>
          <h2 className='py-2'>Release Date :  {movie.release_date}</h2>
          <h2 className='py-2'>Vote Count : {movie.vote_count}</h2>
          <h2 className='py-2'>Vote Average : {movie.vote_average}</h2>
          <h2 className='py-2'>Language : {movie.original_language}</h2>
          <h2 className='py-2'>Time : {movie.runtime +" " + `min`}</h2>
        </Col>
      </Row>
      <Row className='py-5 my-5' style={{backgroundColor:"#171717"}}>
        <h2>Story :</h2> 
        <p className='card-text-sotry'>{movie.overview}</p>
      </Row>
      <Row className='my-5 'style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Link to="/" className='w-1500'> <button className='btn mr-0 btn-danger'>Go Back</button></Link>
        <a href={movie.homepage} className='w-1500'><button className='btn mr-0 btn-danger'>Go Watch Movie</button></a>
      </Row>
    </Container>
  )
}

export default MovieDetails
