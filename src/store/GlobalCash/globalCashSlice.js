import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const globalCashSlice = createSlice({
    name: 'globalCashStore',
    initialState: {
        globalCash: 0
    },
    reducers: {

        plus(state, action) {
            console.log('action: ', action)
            state.globalCash += action.payload.sum
        },

        reset(state, action) {
            console.log("action: ", action)
            state.globalCash = 0
        }
    }
})

export const {plus, reset} = globalCashSlice.actions

export default globalCashSlice.reducer