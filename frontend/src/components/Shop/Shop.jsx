import React, { useEffect, useState } from 'react'
import './Shop.css'
import { listItemsApi } from '../../services/itemServices'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
// import { addToCart } from '../../redux/slice/cartSlice'

import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../redux/slice/cartSlice'

const Shop = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [category, setCategory] = useState('all')

  const {data:items, isError,isLoading,isFetched,error} = useQuery({
    queryFn: ()=>listItemsApi(category),
    queryKey: ['list-items',category]
  })
  
  const cartClickHandler = ({item}) => {
    // dispatch(addToCart({
    //   productId: item._id,
    //   itemName: item.itemName,
    //   image: item.image,
    //   price: item.price,
    //   quantity: 1,

    // }))
    dispatch(addItem(item))
  }
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
          <div className = 'product-card' key = {item._id}>
            <img className = 'product-img' src ={item.image} alt= 'produce-image' onClick = {()=>productClickHandler(item._id)}/>
            <p className = 'product-title'>{item.itemName}</p>
            <br/>
            <p className = 'product-price'>${item.price}</p>
            <button onClick={() => {cartClickHandler({item})}}>Add to cart.</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Shop