import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/registerSlice'
export const store=configureStore({
    reducer:{
        auth:authReducer
    }
})