import React from 'react'
import { Formik, useFormik } from 'formik'
import { useMutation } from '@tanstack/react-query'
import { updateProfileAPI } from '../../services/userServices'
import './UpdateProfile.css'
const UpdateProfile = () => {
const {mutateAsync, isPending, isError, error, isSuccess} = useMutation({
    mutationFn: updateProfileAPI,
    mutationKey: ['update-profile']
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            username: ''
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
    <div className = 'form-container'>
        <h1>Update Profile</h1>
        <form className = 'form'onSubmit = {formik.handleSubmit}>
            {isPending && <h1>One second!</h1>}
            {isSuccess && <h1>Update successful!</h1>}
            {isError && <h1>{error.response.data.message}</h1>}
            <label>Change email:</label>
            <input
                id='new-email'
                name = 'email'
                type = 'email'
                onChange = {formik.handleChange}
                value = {formik.values.email}
                />
            <label>Change username:</label>
            <input 
                id='new-username'
                name = 'username'
                type = 'username'
                onChange={formik.handleChange}
                value = {formik.values.username}
                />
            <button type = 'submit'>Submit</button>    
        </form>
        
    </div>
  )
}

export default UpdateProfile