import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    priceRange: 150,
}
const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        toggleStatus: (state) => {
            state.status = !state.status
        },
        price: (state, actions) => {
            state.priceRange = actions.payload
        }

    }
})
export const { toggleStatus, price } = querySlice.actions
export default querySlice.reducer