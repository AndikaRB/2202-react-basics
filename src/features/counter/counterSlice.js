import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:17,
}

export const counterSlice = createSlice ({
    name:"counter",
    initialState:initialState,
    reducers: {
        increment: (state) => {
            state.value +=1
        },
        decrement: (state) => {
            state.value -=1
        },
        reset: (state) => {
            state.value = 0
        },
        overwriteValue: (state,action) => {
            state.value = action.payload
        }
    },
})

export const {increment, decrement, reset, overwriteValue} = counterSlice.actions

export default counterSlice.reducer