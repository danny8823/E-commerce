import React, { createContext } from 'react'

interface ICartItemsContext {
    cartItemes: ICartItem[];
    setCartItems: (cartItems: ICartItem[]) => void;
}

export const CartItemsContext = createContext(ICartItemsContext)({
    cartItems: [],
    setCartItems: () => {},
  });

const Cart = () => {

  return (
    <div>Cart</div>
  )
}

export default Cart