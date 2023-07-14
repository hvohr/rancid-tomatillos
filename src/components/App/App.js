import React from 'react'
import Header from '../Header/Header'
import MovieCard from '../MovieCard/MovieCard'
import InduvidualMovie from '../InduvidualMovie/InduvidualMovie'
import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home'
import { fetchData, fetchSingleData } from './apiCalls'
import ErrorPage from '../../pages/ErrorPage'

function App() {
  useEffect(() => {
    fetchData().then(
      data => setMovies(data.movies)
    ).catch(error => setError({error:true, response:error}))
  }, [])
  const [movies, setMovies] = useState([]);
  const [single, setSingle] = useState([]);
  const [error, setError] = useState({error:false, response:''})

  let filtered = movies.map(movie => <MovieCard poster={movie.poster_path} title={movie.title} id={movie.id} key={movie.id} findMovie={findMovie} />)

  function findMovie(id) {
    fetchSingleData(id).then(
      data => setSingle(data.movie)
    ).catch(error => setError({error:true, response:error}))
  }

  useEffect(() => setError(error))

  useEffect(() => {
    setSingle(single)
  }, [])
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home filtered={filtered} error={error} />} />
        <Route path='/home' element={<Home error={error} filtered={filtered} />} />
        <Route path='/home/:id' element={<InduvidualMovie error={error} image={single.backdrop_path} title={single.title}
          rating={single.average_rating} date={single.release_date} budget={single.budget} overview={single.overview}
          runtime={single.runtime} tagline={single.tagline} revenue={single.revenue} genres={single.genres} />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
