import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      addItem(state,action) {
          const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id)
          if(itemIndex >= 0) {
              state.cartItems[itemIndex].cartQuantity += 1
          } else {
              const tempProduct = {...action.payload, cartQuantity: 1};
              state.cartItems.push(tempProduct);
          }
          state.cartTotalQuantity++
          localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
      },
      removeFromCart(state,action) {
          const nextCartItems = state.cartItems.filter(
              cartItem => cartItem._id !== action.payload._id
          )

          state.cartItems = nextCartItems

          localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      },
      decreaseCart(state,action) {
          const itemIndex = state.cartItems.findIndex(
              cartItem => cartItem._id === action.payload._id
          )

          if(state.cartItems[itemIndex].cartQuantity > 1) {
              state.cartItems[itemIndex].cartQuantity -= 1;
          } else if(state.cartItems[itemIndex].cartQuantity === 1) {
              const nextCartItems = state.cartItems.filter(
                  cartItem => cartItem._id !== action.payload._id
              )  
              state.cartItems = nextCartItems    
          }
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      },
      clearCart(state,action) {
          state.cartItems = []
          localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
      },
      getTotals(state,action) {
          let {total, quantity } = state.cartItems.reduce((cartTotal, cartItem) => {
              const { price, cartQuantity} = cartItem;
              const itemTotal = price * cartQuantity

              cartTotal.total += itemTotal
              cartTotal.quantity += cartQuantity

              return cartTotal
          },{
              total: 0,
              quantity: 0
          })
          state.cartTotalQuantity = quantity
          state.cartTotalAmount = total
      }
  },
  extraReducers: (builder) => {}    
});

export const {addItem, removeFromCart, decreaseCart, increaseCart, clearCart, getTotals} = cartSlice.actions

export const getCart = (state) => {
  return state.cart
}

export const getTotal = (state) => {
    return state.cart.cartTotalQuantity
}
export default cartSlice.reducer