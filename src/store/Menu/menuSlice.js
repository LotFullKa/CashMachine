import { createSlice } from '@reduxjs/toolkit'

const menuSlice = createSlice({
    name: 'menuStore',
    initialState: {
        items: []
    },
    reducers: {
        addClass(state, action) {
            console.log('action: ', action)

            state.items.push({
                id: new Date().toISOString(),
                price: 0,
                name: action.payload.name
            })
        },

        addItem(state, action) {
            state.items.push({
                id: new Date().toISOString(),
                price: 0,
                name: action.payload.name
            })
        }
    }
})