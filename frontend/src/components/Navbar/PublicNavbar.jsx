import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const PublicNavbar = () => {
  return (
  <div className = 'navbar-container'>
   <div>
      <Link to = '/'>Home</Link>
      <Link to = '/shop'>Shop</Link>
      <Link to = '/about'>About</Link>
    </div>
    <div>
      <Link to = '/register'>Register</Link>
      <Link to = '/login'>Login</Link>
    </div>
  </div>
  )
}

export default PublicNavbar