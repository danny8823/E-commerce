import axios from 'axios'
import { BASE_URL } from '../utils/url'

export const loginAPI = async({email,password}) => {
    console.log(email,password)
    const response = await axios.post(`${BASE_URL}/users/login`,{
        email,
        password
    })
    console.log(response)
    return response.data
}

