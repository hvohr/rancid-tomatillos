import React from 'react'
import Header from '../Header/Header'
import MovieCard from '../MovieCard/MovieCard'
import InduvidualMovie from '../InduvidualMovie/InduvidualMovie'
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  async function fetchData() {
    try {
      let response = await fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies?sort_by=asc(title)')
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

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('')
  const [movieView, setMovieView] = useState(false);
  const [moviesView, setMoviesView] = useState(true);
  const [picked, setPicked] = useState();

  function handleError() {
    if (error !== '') {
      throw new Error(`HTTP Error: ${error} -- Please try again`)
    }
  }

  let filtered = movies.map(movie => <MovieCard poster={movie.poster_path} title={movie.title} id={movie.id} key={movie.id} findMovie={findMovie} />)

  function findMovie(anID) {
    let singular = movies.find(x => Number(x.id) === anID)
    setMoviesView(false)
    setMovieView(true)
    setPicked(singular)
  }
  function floppity() {
    setMovieView(false)
    setMoviesView(true)
  }
  return (
    <div className="App">
      <Header />
      <main className='movie-list'>
        {movieView && <InduvidualMovie floppity={floppity} picked={picked} />}
        {moviesView && filtered}
      </main>
    </div>
  );
}


// function App() {
//   let filtered = movieData.movies.map(movie => <MovieCard poster={movie.poster_path} id={movie.id} key={movie.id}/>)

//     return (
//       <div className="App">
//         <Header />
//         <main className='movie-list'>
//           {filtered}
//         </main>
//       </div>
//     );
//   }

export default App;
