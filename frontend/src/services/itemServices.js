import axios from 'axios'

export const listItemsApi = async()=> {
    const response = await axios.get('http://localhost:3333/api/items/list')
    console.log(response.data)
    return response.data
}