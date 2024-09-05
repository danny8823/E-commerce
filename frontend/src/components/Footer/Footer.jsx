import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className = 'footer-container'>
        <div className = 'footer-links'>
            <Link to = '/'>Home</Link>
            <Link to = '/shop'>Shop</Link>
            <Link to = '/about'>About</Link>
            <Link to = '/contact'>Contact</Link>
        </div>
    </div>
  )
}

export default Footer