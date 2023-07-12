import React from 'react'
import PropTypes from 'prop-types'
import './InduvidualMovie.css'
import { useParams } from "react-router-dom";


function InduvidualMovie(props) {
  const { id } = useParams()
  console.log(useParams())
  let alternate = `A poster of the movie ${props.pickedTitle}`
  return (
    <div className="induvidual-movie-container">
      <h2 className='induvidual-title'> {props.pickedTitle} </h2>
      <img className='movie-card' src={props.movieImage
      } alt={alternate}></img>
      <h2 className='rating'>Rating: {Math.round(props.pickedRating * 10) / 10}</h2>
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