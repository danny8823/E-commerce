import React from 'react'
import { useSelector } from 'react-redux'
import './UserProfile.css'
import UpdatePassword from './UpdatePassword'
import UpdateProfile from './UpdateProfile'
const UserProfile = () => {
  const user = useSelector((state)=>state?.auth?.user)

  return (
    <div className = 'user-card-container'>
      {user ? 
      <div className = 'user-card'>
        <h1>Welcome {user.username}!</h1>
        <p>{user.email}</p>
        <div>
          <h1>Change password</h1>
          <UpdatePassword/>
        </div>
        <div>
          <h1>Change username or email</h1>
          <UpdateProfile/>
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