import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    amount: 0, 
    total: 0,
    isLoading: true,
};

export const getCartItems = createAsyncThunk(
    'cart/getCartItems', 
    async () => {
        try {
            const response = await axios(url)
            return response.data;
        } catch (e) {
            console.log(e.message); 
        }
    }
)


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.amount = 0;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter(item => item.id !== itemId)
        },
        increase: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find(item => item.id === itemId);
            cartItem.amount += 1;
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find(item => item.id === payload);
            cartItem.amount -= 1
        }, 
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItems.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        }
    },
    extraReducers: {
        [getCartItems.pending]: (state) => {
            state.isLoading = true;
        },
        [getCartItems.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.cartItems = action.payload;
        },
        [getCartItems.rejected]: (state) => {
            state.isLoading = false;
        }
    }
});

export const {clearCart, removeItem, increase, 
    decrease, calculateTotals} = cartSlice.actions;

export default cartSlice.reducer;