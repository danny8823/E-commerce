import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, getTotal } from '../../redux/slice/cartSlice'
import { Button } from '@mui/material'
import './Cart.css'
const Cart = ({cart}) => {
  // const cart = useSelector((state)=>state?.cart?.items)

  const dispatch = useDispatch()

  const [cartTotal, setCartTotal] = useState(0)
  const [cartItems, setCartItems] = useState([])

  const emptyCartButtonHandler = () => {
    dispatch(emptyCart())
  }

  console.log('LOOK HERE', cart)

  useEffect(() => {
    setCartItems(cart)
  },[])

  if(!cartItems || cartItems.length === 0) {
    return (
      <div className = 'cart-container'>
        <h1>CART EMPTY.</h1>
      </div>
    )
  }
  return (
    <div className = 'cart-container'>

      {cartItems?.map((item)=> (
        <div key = {item._id} className = 'cart-item-card'>
          <p>{item.itemName}</p>
          <img src = {item.image} alt = 'product'/>
          <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
        </div>
      ))}
      <p>Total:${cartTotal}</p>
      <Button variant = 'contained' onClick={emptyCartButtonHandler}>Empty</Button>
      <Button variant = 'contained'>Check out</Button>
    </div>
  )
}

export default Cart