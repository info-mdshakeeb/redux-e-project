import { configureStore } from '@reduxjs/toolkit'
import querySlice from './Feature/Quary/querySlice'
import cartSlice from './Feature/cart/cartSlice'
import { api } from './api/apiSlice'

export const store = configureStore({
    reducer: {
        cart: cartSlice,
        query: querySlice,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
})