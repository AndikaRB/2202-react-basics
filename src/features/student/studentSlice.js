import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
}

export const studentSlice = createSlice({
    name:"student",
    initialState:initialState,
    reducers: {
        addStudent: (state,action) => {
            let newStudent = {
            name: action.payload.name,
            gender: action.payload.gender,
            course: action.payload.course,
        }

        state.data.push(newStudent)
    }
  },
})

export const { addStudent } = studentSlice.actions

export default studentSlice.reducer