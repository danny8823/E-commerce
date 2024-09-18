import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '@mui/material'
import './Cart.css'
import { addItem, clearCart, decreaseCart, getCart, getTotals, removeFromCart } from '../../redux/slice/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
  const cart = useSelector(getCart)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  },[cart])

  const formatter = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD'
  })

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

  if (cart.cartItems.length === 0) {
    return (
      <div className = 'cart-container'>
        <h1>Cart is empty.....</h1>
      </div>
    )
  }

  return (
    <div className = 'cart-body'>
      <div className = 'cart-container'>
        {cart?.cartItems?.map((item)=> (
          <div key = {item._id} className = 'cart-item-card'>
            <p className = 'cart-item-name'>{item.itemName}</p>
            <img src = {item.image} alt = 'product'/>
            <p className = 'cart-item-price'>${item.price} x {item.cartQuantity} = {formatter.format(item.price * item.cartQuantity)}</p>
            <Button variant='contained' onClick={()=>increaseButtonHandler({item})}>+</Button>
            <Button variant='contained' onClick={()=>decreaseButtonHandler({item})}>-</Button>
            <Button variant='contained' onClick={()=>removeButtonHandler({item})}>Remove</Button>
          </div>
        ))}
      </div>
      <div className = 'cart-total'>
          <div className = 'cart-button'>
            <Button  variant = 'contained' onClick={emptyCartButtonHandler}>Empty</Button>
            <Button  variant = 'contained'><Link to = '/checkout'>Check Out</Link></Button>
          </div>
          <p>Total : {formatter.format(cart.cartTotalAmount)}</p>
        </div>
    </div>
  )
}

export default Cart