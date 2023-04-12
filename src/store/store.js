import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import orderReducer from "./orderQueue/orderQueueSlice";

import { persistStore, 
         persistReducer,
         FLUSH,
         REHYDRATE,
         PAUSE,
         PERSIST,
         PURGE,
         REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const presistConfig = {
    key: 'root',
    storage: storage,
}
const rootReducer = combineReducers({
    orders: orderReducer,
})

const persistedReducer = persistReducer(presistConfig, rootReducer); 

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,]
        }})
})

export const persistor = persistStore(store)
export default store