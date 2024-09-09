import React, { useEffect, useState } from 'react'
import './Shop.css'
import { listItemsApi } from '../../services/itemServices'
import { useQuery } from '@tanstack/react-query'

const Shop = () => {

  const [category, setCategory] = useState()

  const {data:items, isError,isLoading,isFetched,error} = useQuery({
    queryFn: ()=>listItemsApi(category),
    queryKey: ['list-items',category]
  })

  const clickHandler = (e) => {
    const {id} = e.target
    console.log(id)
    setCategory(id)
  }

  return (
    <div>
      <div className = 'shop-navbar'>
        <p onClick={clickHandler} id = 'all'>All</p>
        <p onClick={clickHandler} id = 'clubs'>Clubs</p>
        <p onClick={clickHandler} id = 'balls'>Balls</p>
        <p onClick={clickHandler} id = 'gloves'>Gloves</p>
        <p onClick={clickHandler} id = 'bags'>Bags</p>
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