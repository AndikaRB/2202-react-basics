import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  data: [],
  currentEmployee: {
    name: "",
    email: "",
    password: "",
    id: 0,
  },
}

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    fillEmployeeList: (state, action) => {
      state.data = action.payload
    },
    loginEmployee: (state, action) => {
      const { name, email, password, id } = action.payload

      state.currentEmployee = {
        name,
        email,
        password,
        id,
      }
    },
    logoutEmployee: (state) => {
      state.currentEmployee = { ...initialState.currentEmployee }
    },
  },
})

export const { fillEmployeeList, loginEmployee, logoutEmployee } =
  employeeSlice.actions

export default employeeSlice.reducer

