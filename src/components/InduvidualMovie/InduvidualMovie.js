import React from 'react'
import PropTypes from 'prop-types'
import './InduvidualMovie.css'
import { useParams } from "react-router-dom";
import Header from '../Header/Header'


function InduvidualMovie(props) {
  const { id } = useParams()
  let alternate = `A poster of the movie ${props.title}`
  return (
    
    <section className="induvidual-movie-container">
      <div className='induvidual-title-container'>
        <h2 className='induvidual-title'> {props.title} </h2>
        <h3 className='tagline'>{props.tagline}</h3>
        <img className='movie-card' src={props.image} alt={alternate}></img>
        <h3 className='overview'>{props.overview}</h3>
        <div className='movie-details-container'>
          <h2 className='rating'>Rating: {Math.round(props.rating * 10) / 10} / 10</h2>
          <h2 className='runtime'>Runtime: {props.runtime} minutes</h2>
          <h2 className='release'> Release Date: {props.date} </h2>
          <h2 className='genre'> Genres: {props.genres}{' '}</h2>
        </div>
      </div>
    </section>
  )
}

export default InduvidualMovie

InduvidualMovie.propTypes = {
  pickedRating: PropTypes.number.isRequired,
  pickedTitle: PropTypes.string.isRequired,
  pickedDate: PropTypes.string.isRequired,
}