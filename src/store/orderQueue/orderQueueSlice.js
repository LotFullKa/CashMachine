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
            })
        },
        closeOrder(state, action) {
            console.log("action: ", action)
        },
        rejectOrder(state, action) {
            console.log("action: ", action)
        }
    }
})

export const {addOrder, closeOrder, rejectOrder} = orderQueueSlice.actions;

export default orderQueueSlice.reducer