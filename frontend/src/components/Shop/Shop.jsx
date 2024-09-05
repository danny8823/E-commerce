import React from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'
const Shop = () => {
  return (
    <div>
      <div className = 'shop-navbar'>
        <Link to = '/'>Clubs</Link>
        <Link to = '/'>Balls</Link>
        <Link to = '/'>Apparels</Link>
        <Link to = '/'>Gloves</Link>
        <Link to = '/'>Bags</Link>
      </div>
    </div>
  )
}

export default Shop