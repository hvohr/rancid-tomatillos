import React from 'react'
import Header from '../Header/Header'
import MovieCard from '../MovieCard/MovieCard'
import movieData from '../movieData/movieData'
import InduvidualMovie from '../InduvidualMovie/InduvidualMovie'
import './App.css';
import { useState } from 'react';



function App() {
const [movies, setMovies] = useState(movieData.movies);
const [movieView, setMovieView] = useState(false);
const [moviesView, setMoviesView] = useState(true);
const [picked, setPicked] = useState();

let filtered = movies.map(movie => <MovieCard poster={movie.poster_path} title={movie.title} id={movie.id} key={movie.id} findMovie={findMovie}/>)



function findMovie(anID) {
    console.log(anID)
    console.log('yayayaya')
    let singular = movies.find(x => Number(x.id) === anID)
    
    console.log(singular)   
    setMoviesView(false)
    setMovieView(true)
    setPicked(singular)
  }
  function flippity() {
    console.log('hey')
    setMoviesView(true)
    setMovieView(false)
  }

  

  return (
    <div className="App">
      <Header/>
      <main className='movie-list'>
      {movieView && <button onClick={() => flippity()}> Be gone movie! </button>}  
      {movieView && <InduvidualMovie picked={picked}/>}
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
