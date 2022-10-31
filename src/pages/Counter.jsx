import { useEffect, useState } from "react"
import { Text, Box, Button, Stack, HStack } from "@chakra-ui/react"

// const arr = [1, 2, 3, 4, 5]
// const [a, b, c] = arr

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const [showCounter, setShowCounter] = useState(true)

  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    if (counter <= 0) {
      return
    }

    setCounter(counter - 1)
  }

  const resetCounter = () => {
    setCounter(0)
  }

  const toggleCounter = () => {
    setShowCounter(!showCounter)
  }

  // Bikin useEffect
  // Kalau counter masih 0, ga ada alert
  // Kalau counter kelipatan 3, alert "Fizz"
  // Kalau counter kelipatan 5, alert "Buzz"
  // Kalau counter bukan kelipatan 3 ataupun 5, alert counter
  useEffect(() => {


    if (counter % 3 === 0) {
      alert("Fizz")
    } else if (counter % 5 === 0) {
      alert("Buzz")
    } else {
      alert(counter)
    }
  }, [counter])

  return (
    <Box marginTop="4">
      <Text fontWeight="bold" fontSize="2xl">
        Counter Page
      </Text>

      {/* <Flex direction="column" alignItems="center"> */}
      <Text fontSize="4xl" fontWeight="bold">{showCounter ? counter : null}</Text>
      {/** Div yang memiliki display flex dan direction column */}
      <Stack marginTop="10" alignItems="center">
        <HStack width="400px" spacing="5">
          <Button flex={1} colorScheme="red" onClick={decrementCounter}>
            Kurang
          </Button>
          <Button flex={2} colorScheme="twitter" onClick={resetCounter}>
            Reset
          </Button>
          <Button flex={1} colorScheme="green" onClick={incrementCounter}>
            Tambah
          </Button>
        </HStack>
        <Button width="400px" colorScheme="yellow" onClick={toggleCounter}>
          Toggle Counter Visibility
        </Button>
      </Stack>
      {/* </Flex> */}
    </Box>
  )
}

export default Counter

