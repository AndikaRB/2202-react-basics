import { useState } from 'react'
import {
  Box,
  Text,
  Grid,
  GridItem,
  Stack,
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  RadioGroup,
  Radio,
  HStack,
  useToast,
} from '@chakra-ui/react'
import RegisterModal from '../components/profile/RegisterModal'


const Register = () => {
  const [showPassword, setShowPassword] = useState(false)

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [gender, setGender] = useState('')

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [users, setUsers] = useState([])

  const toast = useToast()

  const tooglePassword = () => {
    setShowPassword(!showPassword)
  }

  const registerBtnHandler = () => {

    if (username.length >= 3 && email && password.length >= 8 && gender) {
      for (let user of users) {
        if (user.email === email || user.username === username) {
          toast({
            title: "Username or email has been used",
            status: "error",
          })

          return
        }
      }

      setModalIsOpen(true)

      let newUser = {
        username: username,
        email: email,
        password: password,
        gender: gender,
      }
      setUsers([...users, newUser])

    } else {
      toast({
        title: 'Form is Still invalid',
        status: 'error'
      })
    }
  }

  const closeModal = () => {
    setModalIsOpen(false)
    setUsername("")
    setEmail("")
    setPassword("")
    setGender("")
  }

  const deleteUserBtnHandler = (idx) => {
    let tempUsers = [...users]
    tempUsers.splice(idx)

    setUsers(tempUsers)
  }

  const renderUsers = () => {
    return users.map((val, idx) => {
      return (
        <Stack
          spacing={4}
          border={'1px solid black'}
          borderRadius={'8px'}
          padding={'12px'}
        >
          <Text>Username: {val.username}</Text>
          <Text>Email: {val.email}</Text>
          <Text>Password: {val.password}</Text>
          <Text>Gender: {val.gender}</Text>
          <Button onClick={() => deleteUserBtnHandler(idx)} colorScheme={'red'}>
            Delete
          </Button>
        </Stack>
      )
    })
  }

  return (
    <>
      <Grid templateColumns={'repeat(2, 1fr)'} gap={'4'}>
        <GridItem>
          <Box padding={'4'} border={'1px solid black'} borderRadius={'8px'}>
            <Stack spacing={4}>
              <Text fontSize={'2xl'} fontWeight={'black'}>
                Register
              </Text>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type={'email'}
                  onChange={(event) => setEmail(event.target.value)}
                  value={email}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                    pr={'60px'}
                  />

                  <InputRightElement width={'56px'} mr={'4px'}>
                    <Button onClick={tooglePassword} height={'28px'} size={'sm'}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <RadioGroup onChange={(value) => setGender(value)} value={gender}>
                <FormLabel>Gender</FormLabel>
                <HStack>
                  <Radio value={'Male'}>Male</Radio>
                  <Radio value={'Female'}>Female</Radio>
                </HStack>
              </RadioGroup>
              <Button
                onClick={registerBtnHandler}
                alignSelf={'center'}
                colorScheme={'green'}
              >
                Register
              </Button>
            </Stack>
          </Box>
        </GridItem>
        <GridItem height={'80vh'} overflow={'scroll'}>
          <Stack>{renderUsers()}</Stack>
        </GridItem>
      </Grid >

      <RegisterModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        username={username}
        email={email}
        password={password}
        gender={gender}
      />
    </>
  )
}
export default Register