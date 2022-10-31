import { Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Counter from "./pages/Counter"
import TextPage from "./pages/Text"
import List from "./pages/List"
import Filter from "./pages/Filter"
import { UnorderedList, ListItem, Box, Text, HStack, Button } from "@chakra-ui/react"
import Register from "./pages/Register"
import ReduxCounter from "./pages/ReduxCounter"
import Student from "./pages/student"
import ProductList from "./pages/ProductList"
import ProductEdit from "./pages/ProductEdit"
import EmployeeRegister from "./pages/EmployeeRegister"
import EmployeeList from "./pages/EmployeeList"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { jsonServerApi } from "./api"
import { fillEmployeeList, logoutEmployee } from "./features/employee/employeSlice"
import { useEffect } from "react"
import styled from "styled-components"


function App() {

  const employeeSelector = useSelector((state) => state.employee)

  const dispatch = useDispatch()

  const fetchEmployees = async () => {
    try {
      const response = await jsonServerApi.get("/employees")

      dispatch(fillEmployeeList(response.data))
    } catch (err) {
      console.log(err)
      // alert("Server error")
    }
  }

  const logoutBtnHandler = () => {
    dispatch(logoutEmployee())
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  const StyledText = styled.text`
  font-size: 32px;
  color: green
  `;

  return (
    <>
      <Box>
        <StyledText>Hai</StyledText>
        <Text color={'blue'}>Hello world</Text>
      </Box>
      <Box>
        <Box minHeight="56px" backgroundColor="teal" padding="4">
          <HStack color="white">
            <Link to="/employees/register">Register</Link>
            <Link to="/employees/list">List</Link>
          </HStack>

          <HStack>
            <Text fontSize="5xl" fontWeight="bold" color="white">
              Total Employee: {employeeSelector.data.length}
            </Text>
            <Box>
              <Text>Current Employee</Text>
              <Text>ID: {employeeSelector.currentEmployee.id}</Text>
              <Text>Name: {employeeSelector.currentEmployee.name}</Text>
              <Text>Email: {employeeSelector.currentEmployee.email}</Text>
              <Text>Password: {employeeSelector.currentEmployee.password}</Text>
            </Box>
          </HStack>

          <Button onClick={logoutBtnHandler} colorScheme="red">
            Logout
          </Button>
        </Box>

        <UnorderedList>
          <ListItem>
            <Link to="/home">Home</Link>
          </ListItem>
          <ListItem>
            <Link to="/about">About</Link>
          </ListItem>
          <ListItem>
            <Link to="/counter">Counter</Link>
          </ListItem>
          <ListItem>
            <Link to="/text">Text</Link>
          </ListItem>
          <ListItem>
            <Link to="/list">List</Link>
          </ListItem>
          <ListItem>
            <Link to="/filter">Filter</Link>
          </ListItem>
          <ListItem>
            <Link to="/register">Register</Link>
          </ListItem>
          <ListItem>
            <Link to="/reduxCounter">ReduxCounter</Link>
          </ListItem>
          <ListItem>
            <Link to="/student">Student</Link>
          </ListItem>
          <ListItem>
            <Link to="/products">ProductList</Link>
          </ListItem>
          <ListItem>
            <Link to="/products/:id">ProductEdit</Link>
          </ListItem>
          <ListItem>
            <Link to="/employees/register">EmployeeRegister</Link>
          </ListItem>
          <ListItem>
            <Link to="/employees/list">EmployeeList</Link>
          </ListItem>
        </UnorderedList>

        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/text" element={<TextPage />} />
          <Route path="/list" element={<List />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reduxCounter" element={<ReduxCounter />} />
          <Route path="/student" element={<Student />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductEdit />} />
          <Route path="/employees/register" element={<EmployeeRegister />} />
          <Route path="/employees/list" element={<EmployeeList />} />
        </Routes>
      </Box >
    </>
  )
}

export default App

