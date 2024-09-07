import React from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import './NavBar.css'
import { logoutAction } from '../../redux/slice/authSlice'

const PrivateNavBar = () => {
  const dispatch = useDispatch()

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
        <Link to = '/profile'>Profile</Link>
        <Link className = 'logout' onClick={logoutHandler}>Logout</Link>
      </div>
    </div>
)}

export default PrivateNavBar