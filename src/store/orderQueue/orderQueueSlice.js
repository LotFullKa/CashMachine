import { createSlice } from '@reduxjs/toolkit'


const orderQueueSlice = createSlice({
    name: 'orderQueueStore',
    initialState: {
        orders: []
    },
    reducers: {
        addOrder(state, action) {
            console.log("action: ", action)

            state.orders.push({
                id: new Date().toISOString(),
                text: action.payload.text,
                payed: false,
                order_list: [],
            })
        },
        closeOrder(state, action) {
            console.log("action: ", action)
           
            state.orders = state.orders.filter(item => item.id !== action.payload.id)
            
        },


        rejectOrder(state, action) {
            console.log("action: ", action)
            state.orders = state.orders.filter(item => item.id !== action.payload.id)
        }
    }
})

export const {addOrder, closeOrder, rejectOrder} = orderQueueSlice.actions;

export default orderQueueSlice.reducer