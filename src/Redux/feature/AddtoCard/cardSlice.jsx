import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}
const cardSlice = createSlice({
    name: "card",
    initialState,
    reducers: {
        addtoCard: (state, actions) => {
            const isExist = state.products.find((p) => p._id === actions.payload._id)
            if (isExist) {
                isExist.quantity += 1
            } else {
                state.products.push({ ...actions.payload, quantity: 1 })
            }

        }
    }
})

export const { addtoCard } = cardSlice.actions
export default cardSlice.reducer