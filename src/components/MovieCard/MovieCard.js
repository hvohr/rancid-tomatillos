import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
  return (
    <img className='movie-card' src={props.poster} alt='A poster of the movie' onClick={() => props.findMovie(props.id)} ></img>
  )
}

// function MovieCard(props) {
//   return (
//     <img className='movie-card' src={props.poster} id={props.id} onClick = {event => props.findMovie(event.target.id)}></img>
//   )
// }

// function MovieCard(props, findMovie) {
//   return (
//     <img className='movie-card' src={props.poster} id={props.id} onClick = {event => console.log(event.target.id)}></img>
//   )
// }

export default MovieCard