import React from 'react'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'
import movieData from '../movieData/movieData'
import './App.css';

function App() {
let filtered = movieData.movies.map(movie => )
  return (
    <div className="App">
      <Header />
      <Movies />
    </div>
  );
}

export default App;
