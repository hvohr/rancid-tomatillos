import React from 'react'

function Home(props) {
  console.log(props)
  return (
    <div className='home-container'>
      {props.error.error && <div><img className='error-logo' alt='big red circle with x inside' src={require('../components/images/cancel.png')}></img>
        <p className='error-message'>{`We apologize! ${props.error.response}. Please try again later.`}</p></div>}
      ({props.filtered} && {props.moviesView})
    </div>
  )
}

export default Home