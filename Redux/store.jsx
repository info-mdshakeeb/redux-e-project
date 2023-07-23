import { configureStore } from '@reduxjs/toolkit'
import querySlice from './Feature/Quary/querySlice'
import cartSlice from './Feature/cart/cartSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        query: querySlice,
    }
})