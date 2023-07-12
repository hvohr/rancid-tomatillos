import React from 'react'
import PropTypes from 'prop-types'
import './InduvidualMovie.css'

function InduvidualMovie(props) {
  let alternate = `A poster of the movie ${props.pickedTitle}`
  return (
    <div className='induvidual-container'>
      <h2 className='title'> {props.pickedTitle} </h2>
      <img className='movie-card' src={props.movieImage
      } alt={alternate}></img>
      <h2 className='rating'> 🌟 {Math.round(props.pickedRating * 10) / 10} 🌟 </h2>
      <h2 className='release'> Release Date: {props.pickedDate} </h2>
    </div>
  )
}

export default InduvidualMovie

InduvidualMovie.propTypes = {
  pickedRating: PropTypes.number.isRequired,
  pickedTitle: PropTypes.string.isRequired,
  pickedDate: PropTypes.string.isRequired,
  goHomeHelper: PropTypes.func.isRequired,  
}