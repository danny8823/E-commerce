import axios from 'axios'

export const listItemsApi = async(category)=> {
    const response = await axios.get('http://localhost:3333/api/items/list',{
        params: {
            category,
        }
    })
    return response.data
}


export const listSingleItemApi = async(id) => {
    const response = await axios.get(`http://localhost:3333/api/items/list/${id}`)
    return response.data
}