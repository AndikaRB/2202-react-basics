import { Box, Button, Container, HStack, Input, Radio, RadioGroup, Select, StatHelpText, Table, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from "@chakra-ui/react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addStudent } from "../features/student/studentSlice"

const Student = () => {
    const studentSelector = useSelector((state) => state.student)
    const dispatch = useDispatch()

    const [inputName, setInputName] = useState("")
    const [inputGender, setInputGender] = useState("")
    const [inputCourse, setInputCourse] = useState("")

    const renderStudents = () => {
        return studentSelector.data.map((val, idx) => {
            return (
                <Tr key={val.gender}>
                    <Td>{val.name}</Td>
                    <Td>{val.gender}</Td>
                    <Td>{val.course}</Td>
                    <Td></Td>
                </Tr>
            )
        })
    }

    const addDataBtnHandler = () => {
        let newStudent = {
            name: inputName,
            gender: inputGender,
            course: inputCourse,
        }

        dispatch(addStudent(newStudent))

        setInputName('')
        setInputGender('')
        setInputCourse('')
    }

    return (
        <Container maxW={'container.lg'}>
            <Text m={'6'} fontSize={'4xl'} font={'bold'}>
                Students Page
            </Text>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Name</Th>
                        <Th>Gender</Th>
                        <Th>Course</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>{renderStudents()}</Tbody>
                <Tfoot>
                    <Tr>
                        <Td>
                            <Input type={'text'} placeholder={'Input Nama'} value={inputName}
                                onChange={(event) => setInputName(event.target.value)}
                            />
                        </Td>
                        <Td>
                            <RadioGroup
                                onChange={(value) => setInputGender(value)}
                                value={inputGender}
                            >
                                <HStack>
                                    <Radio value={'Male'}>Male</Radio>
                                    <Radio value={'Female'}>Female</Radio>
                                </HStack>
                            </RadioGroup>
                        </Td>
                        <Td>
                            <Select
                                value={inputCourse}
                                onChange={(event) => setInputCourse(event.target.value)} placeholder={'<select-course>'} size={'xl'}
                            >
                                <option>Web Development</option>
                                <option>Data Scientist</option>
                                <option>Digital Marketing</option>
                                <option>UI/UX</option>
                            </Select>
                        </Td>
                        <Td>
                            <Button onClick={addDataBtnHandler} colorScheme="green">
                                Add Data
                            </Button>
                        </Td>
                    </Tr>
                </Tfoot>
            </Table>
        </Container>
    )
}

export default Student