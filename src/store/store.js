import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import todoReducer from "./todoSlice"

const store = configureStore({
    reducer: {
        todo : todoReducer,
         cart: cartReducer, 
    }
    
})
export default store;