import { configureStore } from '@reduxjs/toolkit'

import counterSlice from '../features/counter/counterSlice'
import studentSlice from '../features/student/studentSlice'
import employeeSlice from '../features/employee/employeSlice'
import testSlice from '../features/test/testSlice'


export const store = configureStore({
    reducer: {
        counter: counterSlice,
        student: studentSlice,
        employee: employeeSlice,
        test: testSlice,
    }
})