import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './UserProfile.css'
import UpdatePassword from './UpdatePassword'
import UpdateProfile from './UpdateProfile'
import { Link } from 'react-router-dom'
import { Button, Modal,Box } from '@mui/material'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  height: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UserProfile = () => {
  const user = useSelector((state)=>state?.auth?.user)
  const [open1,setOpen1] = useState(false)
  const [open2,setOpen2] = useState(false)

  const handleEmailOpen = () => {
    setOpen1(true)
  }
  const handleEmailClose = () => {
    setOpen1(false)
  }

  const handlePassOpen = () => {
    setOpen2(true)
  }

  const handlePassClose = () => {
    setOpen2(false)
  }

  return (
    <div className = 'user-card-container'>
      {user ? 
      <div>
        <div className = 'user-card'>
          <h1 className = 'user-name'>Welcome {user.username}!</h1>
          <Button variant = 'outline'>Payment methods</Button>
          <Button variant = 'outline'>Address</Button>
          <Button variant = 'outline' onClick={handleEmailOpen}>Change Email</Button>
          <Button variant = 'outline' onClick = {handlePassOpen}>Change Password</Button>
        </div>
        <div>
          <Modal 
            open={open1}
            onClose={handleEmailClose}
            > 
              <Box sx ={style}>
                <UpdateProfile/>
                <Button onClick={handleEmailClose}>Close</Button>
              </Box>
          </Modal>
          <Modal 
            open={open2}
            onClose={handlePassClose}
            > 
              <Box sx ={style}>
                <UpdatePassword/>
                <Button onClick={handlePassClose}>Close</Button>
              </Box>
          </Modal>
        </div>
      </div> : 
      <div>
        <h1>Please log in to see profile.</h1>
      </div>
        }
    </div>
    
  )
}

export default UserProfile