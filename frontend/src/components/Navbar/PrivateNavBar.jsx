import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
const PrivateNavBar = () => {
  return (
    <div className = 'navbar-container'>
   <div>
      <Link to = '/'>Home</Link>
      <Link to = '/shop'>Shop</Link>
      <Link to = '/about'>About</Link>
    </div>
    <div>
      <p className = 'logout'>Logout</p>
    </div>
    </div>
)}

export default PrivateNavBar