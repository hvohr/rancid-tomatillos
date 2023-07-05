import React from 'react'
import Header from '../Header/Header'
import MovieCard from '../MovieCard/MovieCard'
import movieData from '../movieData/movieData'
import './App.css';

function App() {
let filtered = movieData.movies.map(movie => <MovieCard poster={movie.poster_path} />)
  return (
    <div className="App">
      <h1>Rancid tomatillos</h1>
      <main className='movie-list'>
        {filtered}
      </main>
    </div>
  );
}

export default App;
