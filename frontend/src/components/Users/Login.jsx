import React, { useState } from 'react'
import { useFormik } from 'formik';
import {useMutation} from '@tanstack/react-query'
import { loginAPI } from '../../services/userServices';
import {useDispatch} from 'react-redux'
import { loginAction } from '../../redux/slice/authSlice';

const Login = () => {
  const dispatch = useDispatch()

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
        })
        .catch((error)=>{
          console.log(error)
        })
    },
  })

  return (
    <form onSubmit = {formik.handleSubmit}>
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
  )
}

export default Login