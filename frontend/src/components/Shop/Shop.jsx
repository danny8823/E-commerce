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
      <div>
        {items?.map((item) => (
          <div key = {item._id}>
            <h3>{item.itemName}</h3>
            <p>{item.price}</p>
            <img src ={item.image} alt= 'produce-image'/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop