import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
  return (
    <img className='movie-card' src={props.poster}></img>
  )
}

export default MovieCard