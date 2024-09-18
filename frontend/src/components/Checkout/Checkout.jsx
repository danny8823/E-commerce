import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart, getTotals } from '../../redux/slice/cartSlice'
import { Button } from '@mui/material'
import './Checkout.css'

const Checkout = () => {
  const dispatch = useDispatch()
  const cart = useSelector(getCart)

  const style = {
    width: 500,
    margin: 1,
    height: 50,
  }
  const formatter = new Intl.NumberFormat('en-US',{
    style: 'currency',
    currency: 'USD'
  })

  return (
    <div id = 'checkout-container'>
      <div id = 'checkout-title'>
        <h1>Checkout</h1>
        <h2>{formatter.format(cart.cartTotalAmount)}</h2>
      </div>
        <form id = 'address'>
            <label>First name:</label>
            <input 
                id = 'first-name'
                name = 'first-name'
                type = 'name'/>
            <label>Last name:</label>
            <input
                id = 'last-name'
                name = 'last-name'
                type = 'name'/>
            <label>Street address</label>
            <input
              id = 'street-address'
              name = 'street-address'
              type = 'address'/>
            <label>City</label>
            <input
              id = 'city'
              name = 'city'
              type = 'address'/>
            <label>State</label>
            <input
              id='state'
              name = 'state'
              type = 'address'
            />
        </form>
        <form id = 'credit-card'>
          <label>Credit Card Number</label>
          <input
            id = 'cc-number'
            name = 'cc-number'
            type = 'number'/>
          <label>Expiration date</label>
          <input
            id = 'expire-date'
            name = 'expire-date'
            type = 'number'/>
          <label>CCV</label>
          <input
            id = 'ccv'
            name = 'ccv'
            type = 'number'/>
        </form>
        <Button variant='contained' color = 'success' sx={style}>Checkout</Button>
    </div>
  )
}

export default Checkout