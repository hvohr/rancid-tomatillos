import React from 'react'
import PropTypes from 'prop-types'

function Home(props) {
  homeCallType()
  return (
    <div className='home-container'>
      {props.error.error && <div><img className='error-logo' alt='big red circle with x inside' src={require('../components/images/cancel.png')}></img>
        <p className='error-message'>{`We apologize! ${props.error.response}. Please try again later.`}</p></div>}
      ({props.filtered} && {props.moviesView})
    </div>
  )
}

const homeCallType = () => {
Home.propTypes = {
  error: PropTypes.object.isRequired,
  filtered: PropTypes.array.isRequired,
}
}
export default Home