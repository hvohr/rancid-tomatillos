import React from 'react'
import './InduvidualMovie.css'

function InduvidualMovie(props) {
  console.log('22222', props, '11111')


  return (
    <div>
    <button> X </button>
    <img className='movie-card' src={props.picked.poster_path
} alt='A poster of a movie'></img>
    <h2> {props.picked.id} </h2>
    </div>
    
  )
}

export default InduvidualMovie