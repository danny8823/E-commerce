import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './NavBar.css'
import { logoutAction } from '../../redux/slice/authSlice'
import { displayCartQuantity, getCart, getTotal } from '../../redux/slice/cartSlice'

const PrivateNavBar = () => {
  const dispatch = useDispatch()
  const cartQ = useSelector(getTotal)
  const logoutHandler = () => {
    dispatch(logoutAction()) 
    localStorage.removeItem('userInfo')
  }

  
  return (
   <div className = 'navbar-container'>
    <div>
        <Link to = '/'>Home</Link>
        <Link to = '/shop'>Shop</Link>
        <Link to = '/about'>About</Link>
      </div>
      <div>
        <Link to = '/cart'>Cart : {cartQ}</Link>
        <Link to = '/profile'>Profile</Link>
        <Link className = 'logout' onClick={logoutHandler}>Logout</Link>
      </div>
    </div>
)}

export default PrivateNavBar