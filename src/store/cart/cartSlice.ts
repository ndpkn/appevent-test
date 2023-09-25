import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { CartItem, CartItems } from "../../types";

const initialState: CartItems = {
  cartItems: [],
  total: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = [...state.cartItems, action.payload]
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id)
    },
    countTotal: (state) => {
      const cartTotal: number[] = []
      state.cartItems.map((item) => {
        cartTotal.push(item.price)
      });
      state.total = cartTotal.reduce((acc, number) => acc + number, 0);
    }
  }
})

export const { addToCart, removeFromCart, countTotal } = cartSlice.actions
export const cartList = (state: RootState) => state.cart
export default cartSlice.reducer