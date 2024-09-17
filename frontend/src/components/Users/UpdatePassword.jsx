import React from 'react'
import { useFormik } from 'formik'
import { useMutation } from '@tanstack/react-query'
import { changePasswordAPI } from '../../services/userServices'
import './UpdatePassword.css'
const UpdatePassword = () => {
  const {mutateAsync, isPending, isError, error, isSuccess} = useMutation({
    mutationFn: changePasswordAPI,
    mutationKey: ['change-password']
  })

  const formik = useFormik({
    initialValues: {
      newPassword : ''
    },
    onSubmit:(values) => {
      mutateAsync(values)
        .then((data)=>{
          console.log(data)
        })
        .catch((error)=>{
          console.log(error)
        })
    }
  })

  return (
    <div className = 'password-container'>
      <h1>Change Password</h1>
      <form onSubmit={formik.handleSubmit}>
        {isPending && <h1>One second!</h1>}
        {isSuccess && <h1>Login successful!</h1>}
        {isError && <h1>{error.response.data.message}</h1>}
        <label>New password</label>
        <input
          id = "new-password"
          name = "newPassword"
          type = "password"
          onChange = {formik.handleChange}
          value = {formik.values.newPassword}
          />
          <button type = 'submit'>Submit</button>
      </form>
    </div>
  )
}

export default UpdatePassword