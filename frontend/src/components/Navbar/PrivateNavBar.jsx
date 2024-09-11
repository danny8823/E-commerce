import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './NavBar.css'
import { logoutAction } from '../../redux/slice/authSlice'
import { PiShoppingCartSimple } from "react-icons/pi";

const PrivateNavBar = () => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logoutAction()) 
    localStorage.removeItem('userInfo') 
  }

  const cart = useSelector((state)=>state?.cart.items)
  
  return (
   <div className = 'navbar-container'>
    <div>
        <Link to = '/'>Home</Link>
        <Link to = '/shop'>Shop</Link>
        <Link to = '/about'>About</Link>
      </div>
      <div>
        <Link to = '/cart'>Cart:</Link>
        <Link to = '/profile'>Profile</Link>
        <Link className = 'logout' onClick={logoutHandler}>Logout</Link>
      </div>
    </div>
)}

export default PrivateNavBar