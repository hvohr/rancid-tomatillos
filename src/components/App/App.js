import React from 'react'
import Header from '../Header/Header'
import MovieCard from '../MovieCard/MovieCard'
import InduvidualMovie from '../InduvidualMovie/InduvidualMovie'
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import {fetchData, fetchSingleData} from './apiCalls'

function App() {
  useEffect(() => {
    fetchData().then(
      data => setMovies(data.movies)
    )
  })
  const [movies, setMovies] = useState([]);
  const [single, setSingle] = useState([])

  let filtered = movies.map(movie => <MovieCard poster={movie.poster_path} title={movie.title} id={movie.id} key={movie.id} findMovie={findMovie} />)

  function findMovie(id) {
    fetchSingleData(id).then(
          data => setSingle(data.movie)
    )
  }
  useEffect(() => {
    setSingle(single)
  })
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home filtered={filtered} />} />
        <Route path='/home' element={<Home filtered={filtered} />} />
        <Route path='/:id' element={<InduvidualMovie image={single.backdrop_path} title={single.title} 
        rating={single.average_rating} date={single.release_date} budget={single.budget} overview={single.overview}
        runtime={single.runtime} tagline={single.tagline} revenue={single.revenue} genres={single.genres} />} />
      </Routes> 
    </div>
  );
}
export default App;
