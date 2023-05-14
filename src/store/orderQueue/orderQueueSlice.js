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
                name: action.payload.name,
                text: action.payload.text,
                price: action.payload.price,
                payed: false,
                order_list: action.payload.order_list,
            })
        },
        closeOrder(state, action) {
            console.log("action: ", action)
           
            state.orders = state.orders.filter(item => item.id !== action.payload.id)
            
        },

        rejectOrder(state, action) {
            console.log("action: ", action)
            state.orders = state.orders.filter(item => item.id !== action.payload.id)
        },

        resetOrders(state, action) {
            console.log('action: ', action)
            state.orders = []
        }
    }
})

export const {addOrder, closeOrder, rejectOrder, resetOrders} = orderQueueSlice.actions;

export default orderQueueSlice.reducer