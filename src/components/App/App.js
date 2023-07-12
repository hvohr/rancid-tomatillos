import React from 'react'
import Header from '../Header/Header'
import MovieCard from '../MovieCard/MovieCard'
import InduvidualMovie from '../InduvidualMovie/InduvidualMovie'
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'

function App() {
  async function fetchData() {
    try {
      let response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
      setError(response.status)
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      handleError()
    }
  }
  useEffect(() => {
    fetchData().then(
      data => setMovies(data.movies)
    )
  })
  function handleError() {
    if (error !== '') {
      throw new Error(`HTTP Error: ${error} -- Please try again`)
    }
  }
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('')
  const [picked, setPicked] = useState('');

  let filtered = movies.map(movie => <MovieCard poster={movie.poster_path} title={movie.title} id={movie.id} key={movie.id} findMovie={findMovie} />)

  function findMovie(anID) {
    let singular = movies.find(x => Number(x.id) === anID)
    setPicked(singular)
  }
  useEffect(() => {
    setPicked(picked)
  })
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home filtered ={filtered}/>} />
        <Route path='/home' element={<Home filtered ={filtered}/>} />
        <Route path= '/:id' element={<InduvidualMovie movieImage={picked.backdrop_path} pickedTitle={picked.title} pickedRating={picked.average_rating} pickedDate={picked.release_date}/>} />
      </Routes>
    </div>
  );
}
export default App;
