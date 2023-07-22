import { configureStore } from '@reduxjs/toolkit'
import cardSlice from './feature/AddtoCard/cardSlice'

export const store = configureStore({
    reducer: {
        card: cardSlice
    }
})