import React from 'react';
import PropTypes from 'prop-types';
import './InduvidualMovie.css';
import { useParams } from "react-router-dom";
import Header from '../Header/Header';
import urlPropType from 'url-prop-type';


function InduvidualMovie(props) {
  const { id } = useParams()
  let alternate = `A poster of the movie ${props.title}`
  callType()
  return (
    <section className="induvidual-movie-container">
      {props.error.error && <div><img className='error-logo' alt='big red circle with x inside' src={require('../../components/images/cancel.png')}></img>
        <p className='error-message'>{`We apologize! ${props.error.response}. Please try again later.`}</p></div>}
      <div className='induvidual-title-container'>
        <h2 className='induvidual-title'> {props.title} </h2>
        <h3 className='tagline'>{props.tagline}</h3>
        <img className='movie-card' src={props.image} alt={alternate}></img>
        <h3 className='overview'>{props.overview}</h3>
        <div className='movie-details-container'>
          <h2 className='rating'>Rating: {Math.round(props.rating * 10) / 10} / 10</h2>
          <h2 className='runtime'>Runtime: {props.runtime} minutes</h2>
          <h2 className='release'> Release Date: {props.date} </h2>
          <h2 className='genre'> Genres:{props.genres !== undefined && props.genres.map((genre) => {
            return <h2 className='genre-list'>{genre}</h2>})}</h2>
        </div>
      </div>
    </section>
  )
}

export default InduvidualMovie

const callType = () => {

InduvidualMovie.propTypes = {
  error: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  image: urlPropType.isRequired,
}
}