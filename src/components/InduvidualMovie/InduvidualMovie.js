import React from 'react'
import './InduvidualMovie.css'

function InduvidualMovie(props) {
  console.log('22222', props, '11111')


  return (
    <div>
    <button onClick={props.floppity}> Go back home! </button>
    <h2 class='title'> {props.picked.title} </h2>
    <img className='movie-card' src={props.picked.backdrop_path
} alt='A poster of a movie'></img>
    <h2 class='info'> 🌟 {Math.round(props.picked.average_rating *10)/10} 🌟 </h2>
    <h2 class='info'> 🗓️ {props.picked.release_date} 🗓️ </h2>     
    </div>    
  )
}

export default InduvidualMovie