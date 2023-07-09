import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
  return (
    <img className='front-movie-card' src={props.poster} alt='A poster of the movie' onClick={() => props.findMovie(props.id)} ></img>
  )
}

export default MovieCard