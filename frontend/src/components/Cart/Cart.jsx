import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import './Cart.css'
import { addItem, clearCart, decreaseCart, getCart, getTotals, removeFromCart } from '../../redux/slice/cartSlice'

const Cart = () => {
  const cart = useSelector(getCart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  },[cart])

  const emptyCartButtonHandler = (e) => {
    e.preventDefault()
    dispatch(clearCart())
  }

  const increaseButtonHandler = ({item}) => {
    dispatch(addItem(item))
  }

  const decreaseButtonHandler = ({item}) => {
    dispatch(decreaseCart(item))
  }

  const removeButtonHandler = ({item}) => {
    dispatch(removeFromCart(item))
  }
  
  return (
    <div className = 'cart-body'>
      <div className = 'cart-container'>
        {cart?.cartItems?.map((item)=> (
          <div key = {item._id} className = 'cart-item-card'>
            <p className = 'cart-item-name'>{item.itemName}</p>
            <img src = {item.image} alt = 'product'/>
            <p className = 'cart-item-price'>${item.price} x {item.cartQuantity} = ${item.price * item.cartQuantity}</p>
            <Button variant='contained' onClick={()=>increaseButtonHandler({item})}>+</Button>
            <Button variant='contained' onClick={()=>decreaseButtonHandler({item})}>-</Button>
            <Button variant='contained' onClick={()=>removeButtonHandler({item})}>Remove All</Button>
          </div>
        ))}
        <div>
          <p>Total:${cart.cartTotalAmount}</p>
          <Button variant = 'contained' onClick={emptyCartButtonHandler}>Empty</Button>
          <Button variant = 'contained'>Check out</Button>
        </div>
      </div>
    </div>
  )
}

export default Cart