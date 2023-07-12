import React from 'react'
import './InduvidualMovie.css'

function InduvidualMovie(props) {
  return (
    <div className='induvidual-container'>
      <button className='home-button' onClick={props.goHomeHelper}>Go Back Home</button>
      <h2 className='title'> {props.title} </h2>
      <img className='movie-card' src={props.movieImage
      } alt='A poster of the movie.'></img>
      <h2 className='info'> 🌟 {Math.round(props.pickedRating * 10) / 10} 🌟 </h2>
      <h2 className='info'> Release Date: {props.pickedDate} </h2>
    </div>
  )
}

export default InduvidualMovie