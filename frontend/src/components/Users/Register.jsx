import React from 'react'
import { useFormik } from 'formik';
import {useMutation} from '@tanstack/react-query'
import {useDispatch} from 'react-redux'
import { registerAPI } from '../../services/userServices';
import './Register.css'

const Register = () => {
  const dispatch = useDispatch()

  const {mutateAsync, isPending, isError, error ,isSuccess} = useMutation({
    mutationFn: registerAPI,
    mutationKey: ['register']
  })

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: ''
    },
    onSubmit: (values) => {
      mutateAsync(values)
        .then((data)=>{
          console.log(data)
        })
        .catch((error)=>{
          console.log(error.message)
        })
    }
  })



  return (
    <div className = 'form-container'>
      <form onSubmit={formik.handleSubmit}>
        {isPending && <h1>Loading....</h1>}
        {isError && <h1>Error.....</h1>}
        {isSuccess && <h1>Success.....</h1>}
        <h2>Sign up now!</h2>
        <input 
          id="username"
          type="text"
          {...formik.getFieldProps("username")}
          placeholder="Username"
          />
        <input 
            id="email"
            type="email"
            {...formik.getFieldProps("email")}
            placeholder="Email"
            />
        <input 
            id="password"
            type="password"
            {...formik.getFieldProps("password")}
            placeholder="Password"
            />
        <input 
            id="confirmPassword"
            type="password"
            {...formik.getFieldProps("confirmPassword")}
            placeholder="Confirm Password"
            />
        <button 
          type="submit"
          >Register</button>
      </form>
    </div>
  )
}

export default Register