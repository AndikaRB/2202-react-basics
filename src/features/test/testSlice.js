import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    data : [],
    // currentEmployee: {
    //     name: "",
    //     email: "",
    //     password: "",
    //     id: 0,
    // },
}

export const testSlice = createSlice ({
    name: 'test',
    initialState,
    reducers: {
        fillEmployeeList: (state, action) => {
            state.data = action.payload
        },
        // loginEmployee: (state,action) => {
        //     state.currentEmployee = action.payload
        //     // const { name, email, password, id } = action.payload
            
        //     // state.currentEmployee = {
        //     //     name,
        //     //     email,
        //     //     password,
        //     //     id
        //     // }
        // },       
        
        // logoutEmployee: () => {
        //     return {...initialState}
        // }
    },
})

export const { fillEmployeeList, loginEmployee, logoutEmployee} = testSlice.actions

export default testSlice.reducer