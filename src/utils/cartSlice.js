import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addIteam: (state,action)=>{
            state.items.push(action.payload);
        },

        removeIteam: (state,action)=>{
            state.items.pop();
        },

        clearCart: (state)=>{
            state.items = [];
        },
    },
});

export const {addIteam, removeIteam, clearCart} = cartSlice.actions;

export default cartSlice.reducer;