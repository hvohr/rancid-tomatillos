import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <header className='header-container'>
      <div className='title-container'>
        <img className='title-logo' src={require('../images/clapperboard.png')}></img>
        <h1 className='website-title'>Rancid Tomatillos</h1>
      </div>
      <NavLink to='/home' className='nav-home-button'>Home</NavLink>
    </header>
  )
}

export default Header