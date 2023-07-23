import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    total: 0,
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isExist = state.products.find(p => p._id === action.payload._id);
            if (isExist) {
                isExist.quantity += 1
            } else { state.products.push({ ...action.payload, quantity: 1 }) }
            state.total += action.payload.price
        },
        removeQuantity: (state, action) => {
            const isExist = state.products.find(p => p._id === action.payload._id);
            if (isExist && isExist.quantity > 1) {
                isExist.quantity -= 1
                state.total -= action.payload.price
            }

        },
        deleteItem: (state, action) => {
            state.products = state.products.filter(p => p._id !== action.payload._id);
            state.total -= action.payload.price * action.payload.quantity
        }
    }
})
export const { addToCart, removeQuantity, deleteItem } = cartSlice.actions

export default cartSlice.reducer