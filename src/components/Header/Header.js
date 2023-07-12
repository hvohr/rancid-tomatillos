import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'


function Header() {
  return (
    <header className='header-container'>
    <h1>Rancid Tomatillos</h1>
    <NavLink to='/home' className='nav-home-button'>Home</NavLink>
    </header>
  )
}

export default Header