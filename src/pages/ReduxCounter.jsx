import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, overwriteValue } from "../features/counter/counterSlice"


const ReduxCounter = () => {

    const [numInput, setNumInput] = useState(0)

    const counterSelector = useSelector((state) => state.counter)

    const dispatch = useDispatch()

    const incrementBtnHandler = () => {
        dispatch(increment())
    }

    const decrementBtnHandler = () => {
        dispatch(decrement())
    }

    const resetBtnHandler = () => {
        dispatch(reset())
    }

    const submitBtnHandler = () => {
        dispatch(overwriteValue(Number(numInput)))
        setNumInput('')
    }

    return (
        <Box>
            <Text>Redux Counter</Text>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
                {counterSelector.value}
            </Text>
            <Button onClick={decrementBtnHandler}>Decrement</Button>
            <Button onClick={resetBtnHandler}>Reset</Button>
            <Button onClick={incrementBtnHandler}>Increment</Button>
            <br />
            <Input
                value={numInput}
                onChange={(event) => setNumInput(event.target.value)}
                type={'number'}
            />
            <Button onClick={submitBtnHandler}>Submit</Button>
        </Box>
    )
}

export default ReduxCounter