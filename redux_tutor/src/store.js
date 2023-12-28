import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./features/cart/cart_slice"

export const store = configureStore({
    reducer:{
        cart: cartReducer,
    },
})