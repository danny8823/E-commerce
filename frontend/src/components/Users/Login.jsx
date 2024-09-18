import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useFormik } from 'formik';
import {useMutation} from '@tanstack/react-query'
import { loginAPI } from '../../services/userServices';
import {useDispatch} from 'react-redux'
import { loginAction } from '../../redux/slice/authSlice';
import './Login.css'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {mutateAsync, isPending, isError, error, isSuccess} = useMutation({
    mutationFn: loginAPI,
    mutationKey: ['login']
  })

  const formik = useFormik({
    initialValues:{
      email:'',
      password: ''
    },
    onSubmit: (values) => {
      mutateAsync(values)
        .then((data)=>{
          dispatch(loginAction(data))
          localStorage.setItem('userInfo',JSON.stringify(data))
          navigate('/shop')
        })
        .catch((error)=>{
          console.log(error)
        })
    },
  })

  return (
    <div className = 'form-container'>
       <form onSubmit = {formik.handleSubmit}>
        {isPending && <h1>One second!</h1>}
        {isSuccess && <h1>Login successful.</h1>}
        {isError && <h1>{error.response.data.message}</h1>}
        <label htmlFor = "email">Email Address</label>
        <input 
          id = "email"
          name = "email"
          type = "email"
          onChange = {formik.handleChange}
          value = {formik.values.email}
        />
        <input 
          id = "password"
          name = "password"
          type = "password"
          onChange = {formik.handleChange}
          value = {formik.values.password}
        />
        <button type = 'submit'>Submit</button>            
      </form>
    </div>
   
  )
}

export default Login