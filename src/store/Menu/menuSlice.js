import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const menuSlice = createSlice({
    name: 'menuStore',
    initialState: {
        items: []
    },
    reducers: {

        addItem(state, action) {
            console.log('action: ', action)
            state.items.push({
                id: new Date().toISOString(),
                price: action.payload.price,
                name: action.payload.name,
            })
        },

        removeItem(state, action) {
            console.log("action: ", action)
            state.items = state.items.filter(item => item.id !== action.payload.id)
        }
    }
})

export const {removeItem, addItem} = menuSlice.actions

export default menuSlice.reducer