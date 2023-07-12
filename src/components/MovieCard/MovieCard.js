import React from 'react'
import PropTypes from 'prop-types'
import './MovieCard.css'

function MovieCard({title, poster, id, findMovie}) {
  let alternate = `A poster of the movie ${title}`
  return (
    <img className='front-movie-card' tabIndex='0' src={poster} alt={alternate} id={id} onClick={() => findMovie(id)}></img>
  )
}

export default MovieCard

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  findMovie: PropTypes.func.isRequired,
}