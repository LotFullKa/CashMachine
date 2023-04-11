import { configureStore } from "@reduxjs/toolkit";
import orederReducer from "./orderQueue/orderQueueSlice"

export default configureStore({
    reducer: {
        orders: orederReducer,
    }
})