import { combineReducers, configureStore } from "@reduxjs/toolkit";
import orderReducer from "./orderQueue/orderQueueSlice";
import menuReducer from "./Menu/menuSlice"

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
    menu: menuReducer,
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