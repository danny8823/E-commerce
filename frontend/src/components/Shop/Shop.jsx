import React, { useEffect, useState } from 'react'
import './Shop.css'
import { listItemsApi } from '../../services/itemServices'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'

const Shop = () => {
  const navigate = useNavigate()
  const [category, setCategory] = useState('all')

  const {data:items, isError,isLoading,isFetched,error} = useQuery({
    queryFn: ()=>listItemsApi(category),
    queryKey: ['list-items',category]
  })

  const filterClickHandler = (e) => {
    const {id} = e.target
    setCategory(id)
  }

  const productClickHandler = (id) => {
    navigate(`/item/${id}`)
  }

  return (
    <div>
      <div className = 'shop-navbar'>
        <button onClick={filterClickHandler } id = 'all' className = 'filter-button'>All</button>
        <button onClick={filterClickHandler } id = 'clubs' className = 'filter-button'>Clubs</button>
        <button onClick={filterClickHandler } id = 'balls' className = 'filter-button'>Balls</button>
        <button onClick={filterClickHandler } id = 'gloves' className = 'filter-button'>Gloves</button>
        <button onClick={filterClickHandler } id = 'bags' className = 'filter-button'>Bags</button>
      </div>
      {isError && <div>Oops.....there was an error.</div>}
      {isLoading && <div>Loading...one second please.</div>}
      <div className = 'product-container'>
        {items?.map((item) => (
          <div className = 'product-card' key = {item._id} onClick = {()=>productClickHandler(item._id)}>
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