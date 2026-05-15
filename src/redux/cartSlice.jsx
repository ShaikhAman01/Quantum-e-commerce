import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = { ...action.payload };
            
            item.price = Number(item.price) || 0;
            item.quantity = Number(item.quantity) || 1;

            if (item.time && typeof item.time === 'object') {
                item.time = item.time.seconds ? item.time.seconds * 1000 : Date.now();
            }

            state.push(item);
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },
        incrementQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item) {
                item.quantity = (Number(item.quantity) || 0) + 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity = (Number(item.quantity) || 2) - 1;
            }
        },
    },
})

export const { addToCart, deleteFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions

export default cartSlice.reducer