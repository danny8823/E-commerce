import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, getTotal } from '../../redux/slice/cartSlice'

const Cart = () => {
  const cart = useSelector((state)=>state?.cart?.items)
  const dispatch = useDispatch()
  const [cartTotal, setCartTotal] = useState(0)

  const emptyCartButtonHandler = () => {
    dispatch(emptyCart())
  }

  useEffect(() => {
    let total = 0
    cart.map((item) => (
      total += item.price * item.quantity
    ))
    setCartTotal(total)
  },cart)

  return (
    <div>
      {cart?.map((item)=> (
        <div>
          <p>{item.itemName}</p>
          <p>${item.price} x {item.quantity} = ${item.price * item.quantity}</p>
        </div>
      ))}
      <p>Total:${cartTotal}</p>
      <button onClick={emptyCartButtonHandler}>Empty</button>
    </div>
  )
}

export default Cart