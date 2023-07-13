import React from 'react'
// import Header from '../components/Header'

function Home(props) {
  return (
    <div className='home-container'>
      ({props.filtered} && {props.moviesView})
    </div>
  )
}

export default Home