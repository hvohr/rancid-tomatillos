import React from 'react'
import './InduvidualMovie.css'

function InduvidualMovie(props) {
  return (
    <div>
      <button onClick={props.floppity}> Go back home! </button>
      <h2 className='title'> {props.picked.title} </h2>
      <img className='movie-card' src={props.picked.backdrop_path
      } alt='A poster of a movie'></img>
      <h2 className='info'> 🌟 {Math.round(props.picked.average_rating * 10) / 10} 🌟 </h2>
      <h2 className='info'> Release Date: {props.picked.release_date} </h2>
    </div>
  )
}

export default InduvidualMovie