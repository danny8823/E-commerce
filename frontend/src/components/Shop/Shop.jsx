import React, { useEffect } from 'react'
import './Shop.css'
import { listItemsApi } from '../../services/itemServices'
import { useQuery } from '@tanstack/react-query'

const Shop = () => {
  const {data:items, isError,isLoading,isFetched,error} = useQuery({
    queryFn: listItemsApi,
    queryKey: ['list-items']
  })

  return (
    <div>
      <div className = 'shop-navbar'>
        <p>Clubs</p>
        <p>Balls</p>
        <p>Gloves</p>
        <p>Bags</p>
      </div>
      <div className = 'product-container'>
        {items?.map((item) => (
          <div className = 'product-card' key = {item._id}>
            <img className = 'product-img' src ={item.image} alt= 'produce-image'/>
            <p className = 'product-title'>{item.itemName}</p>
            <br/>
            <p className = 'product-price'>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop