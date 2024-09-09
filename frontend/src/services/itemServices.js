import axios from 'axios'

export const listItemsApi = async(category)=> {
    console.log('API FIRED',category)
    const response = await axios.get('http://localhost:3333/api/items/list',{
        params: {
            category,
        }
    })
    return response.data
}