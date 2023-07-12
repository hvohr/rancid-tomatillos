import React from 'react'
import './MovieCard.css'

function MovieCard({title, poster, id, ...props}) {
  let alternate = `A poster of the movie ${title}`
  return (
    <img className='front-movie-card' src={poster} alt={alternate} id={id} onClick={() => props.findMovie(id)}></img>
  )
}

export default MovieCard