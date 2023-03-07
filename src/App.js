import './App.css';
import Navbar from './components/Navbar';
import LatestContainer from './components/LatestContainer';
import axios from "axios"
import { useEffect, useState } from 'react';
import "bootstrap";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MovieDetails from './components/MovieDetails';


function App() {
  const [movies, setMovies] = useState([])
  const [pageCount, setPageCount] = useState(0)

  //get all movies by axios
  const getAllMovies = async () =>{
    const res = await  axios.get("https://api.themoviedb.org/3/movie/popular?api_key=99df2f0c2566009a62a255d959d2c721&language=en")
    setMovies(res.data.results);
    setPageCount(res.data.total_pages - 36876)
  }
 

  //get current page
  const getPage = async (page) =>{
    const res = await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=99df2f0c2566009a62a255d959d2c721&language=en-US&page=${page}`)
    setMovies(res.data.results);
    setPageCount(res.data.total_pages - 36876)
  }
  
  useEffect(() =>{
    getAllMovies()
    
  },[])

  //to search in api
  const search = async (word) =>{
    if(word ===""){
      getAllMovies()
    }else{
      const res = await  axios.get(`https://api.themoviedb.org/3/search/movie?api_key=99df2f0c2566009a62a255d959d2c721&query=${word}&language=en-US&include_adult=false`)
      setMovies(res.data.results);
      setPageCount(res.data.total_pages)
      // console.log(res);
    }
  }

  return (
    <>
      <Navbar search={search}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LatestContainer movies={movies} getPage={getPage} pageCount={pageCount}/>}/>
          <Route path='/movie/:id' element={<MovieDetails/>}/>
        </Routes>
      </BrowserRouter>
      
      
      
    </>
  );
}

export default App;
