import { createSlice } from '@reduxjs/toolkit'


export const orderQueueSlice = createSlice({
    name: 'orderQueueStore',
    initialState: {
        orders = []
    },
    reducers: {
        addOrder(state, action) {
            console.log("state: ", state)
            console.log("action: ", action)

            state.orders.push({
                id: new Date().toISOString(),
                text: action.payload.text,
            })
        },
        closeOrder(state, action) {

        },
        rejectOrder(state, action) {

        }
    }
})

export const {} = orderQueueSlice.actions;

export default orderQueueSlice.reducer