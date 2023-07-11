import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
  return (
    <img className='front-movie-card' src={props.poster} alt='A poster of the movie' id={props.id} onClick={() => props.findMovie(props.id)}></img>
  )
}

export default MovieCard