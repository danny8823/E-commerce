import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { listSingleItemApi } from '../../services/itemServices'
import './SingleProduct.css'

const SingleProduct = () => {
  const {id} = useParams()
  
  const {data, isError, isLoading, isFetched, error} = useQuery({
    queryFn: ()=>listSingleItemApi(id),
    queryKey: ['list-single-item',id]
  })

  
  return (
    <div className = 'item-container'>
      <div className = 'item-card'>
        <h1>{data?.itemName}</h1>
        <br/><br/><br/>
        <img src = {data?.image} alt = 'item-image'/>
        <br/><br/><br/><br/><br/><br/>
        <p>${data?.price}</p>
      </div>
    </div>
  )
}

export default SingleProduct