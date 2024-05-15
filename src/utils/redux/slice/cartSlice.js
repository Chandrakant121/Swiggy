import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        // action (addItem), ()=> this is reducer function
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            // const index = action.payload;
            // if (index >= 0 && index < state.items.length) {
            //     state.items.splice(index, 1);
            // }
            state.items.pop(action.payload)
        },
        clearCart: (state) => {
            state.items.length = 0
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions
export default cartSlice.reducer