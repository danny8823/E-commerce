import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import './NavBar.css'
import { logoutAction } from '../../redux/slice/authSlice'
import {Modal, Typography,Button} from '@mui/material'
import Cart from '../Cart/Cart'

const PrivateNavBar = () => {
  const dispatch = useDispatch()

  const [open,setOpen] = useState(false)

  const logoutHandler = () => {
    dispatch(logoutAction()) 
    localStorage.removeItem('userInfo')
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  
  return (
   <div className = 'navbar-container'>
    <div>
        <Link to = '/'>Home</Link>
        <Link to = '/shop'>Shop</Link>
        <Link to = '/about'>About</Link>
      </div>
      <div>
        <Button onClick = {handleOpen}>Cart</Button>
        <Modal open={open} 
               onClose={handleClose}
        > 
          <div>
           <Cart/> 
           <Button onClick = {handleClose}>Close</Button>
          </div>
          
          
        </Modal>
        <Link to = '/cart'>Cart</Link>
        <Link to = '/profile'>Profile</Link>
        <Link className = 'logout' onClick={logoutHandler}>Logout</Link>
      </div>
    </div>
)}

export default PrivateNavBar