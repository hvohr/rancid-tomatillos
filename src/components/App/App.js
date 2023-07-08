import React from 'react'
import Header from '../Header/Header'
import MovieCard from '../MovieCard/MovieCard'
import movieData from '../movieData/movieData'
import InduvidualMovie from '../InduvidualMovie/InduvidualMovie'
import './App.css';

function App() {
let filtered = movieData.movies.map(movie => <MovieCard poster={movie.poster_path} id={movie.id} key={movie.id} findMovie={findMovie}/>)

function findMovie(anID) {
    console.log(anID)
    console.log('yayayaya')
    let singular = filtered.find(x => Number(x.key) === anID)
    console.log(singular)
  }
  return (
    <div className="App">
      <Header />
      <main className='movie-list'>
        {filtered}
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
