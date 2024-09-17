import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import { FaPhone } from "react-icons/fa6";
import { AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className = 'footer-container'>
        <div className = 'footer-links'>
            <Link to = '/'>Home</Link>
            <Link to = '/shop'>Shop</Link>
            <Link to = '/about'>About</Link>
            <Link><AiTwotoneMail className = 'contact-icons'/> Email</Link>
            <Link><FaPhone className = 'contact-icons'/>1-800-GOLF</Link>
        </div>
    </div>
  )
}

export default Footer