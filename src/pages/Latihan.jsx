import { useState, useEffect } from "react"
import { Grid, GridItem, Tab, TabPanel, TabPanels, Tabs, TabList, Avatar, Badge, Box, Button, FormControl, Input, InputGroup, UnorderedList, Flex, Stack, Text, HStack, VStack, StackDivider } from "@chakra-ui/react"

const Latihan = () => {
    const [fruits, setFruits] = useState([
        "Jeruk", "Leci", "Apel", "Mangga", "Pisang", "Buah Naga"
    ])

    const [inputFilter, setInputFilter] = useState('')
    // const [currentFilter, setCurrentFilter] = useState('')
    const [inputAddFruits, setInputAddFruits] = useState('')

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const renderFruits = () => {
        return fruits.map((val) => {
            if (val.includes((inputFilter))) {
                return <li>{val}</li>
            }
        })
    }

    const filterBtnHandler = () => {
        setInputFilter(inputFilter)
    }

    const addFruitBtnHandler = () => {
        if (!inputAddFruits) {
            alert('Input Empty')
        }
        if (!fruits.includes(inputAddFruits)) {
            let newFruits = [...fruits]
            newFruits.push(inputAddFruits)
            setFruits(newFruits)
            setInputAddFruits('')
        } else {
            alert(`${inputAddFruits} has been declared`)
        }
    }
    return (
        <Flex
            flexDirection={'column'}
            width={'100wh'}
            height={'100wh'}
            backgroundColor={'white'}
            justifyContent={'center'}
            alignItems={'right'}
            margin={'40px'}
        >
            <VStack alignItems={'center'} h={'250px'} w={'400px'} >
                <Text fontWeight={'bold'} fontSize={'30px'}>Fruits Filter Page</Text>
                <FormControl>
                    <InputGroup>
                        <Input type={'text'}
                            onChange={e => setInputFilter(capitalizeFirstLetter(e.target.value))} value={inputFilter}>
                        </Input>
                        <Button onClick={filterBtnHandler}>Filter</Button>
                    </InputGroup>
                    <br /> <br />
                    <InputGroup>
                        <Input type={'text'}
                            onChange={e => setInputAddFruits(capitalizeFirstLetter(e.target.value))} value={inputAddFruits}
                        >
                        </Input>
                        <Button onClick={addFruitBtnHandler}>Add</Button>
                    </InputGroup>
                </FormControl>
            </VStack>
            <UnorderedList>{renderFruits()}</UnorderedList>
        </Flex>
        // <Grid
        //     h='200px'
        //     templateRows='repeat(5, 1fr)'
        //     templateColumns='repeat(3, 1fr)'
        //     gap={4}
        // >
        //     <GridItem rowSpan={1} colSpan={3} bg='tomato' />
        //     <GridItem rowSpan={1} colSpan={3} bg='papayawhip' />
        //     <GridItem rowSpan={1} colSpan={1} bg='tomato' />
        //     <GridItem rowSpan={1} colSpan={1} bg='papayawhip' />
        //     <GridItem rowSpan={1} colSpan={1} bg='tomato' />
        //     <GridItem rowSpan={1} colSpan={2} bg='papayawhip' />
        //     <GridItem rowSpan={1} colSpan={1} bg='tomato' />
        //     <GridItem rowSpan={1} colSpan={1} bg='papayawhip' />
        //     <GridItem rowSpan={1} colSpan={2} bg='tomato' />
        //     <GridItem rowSpan={1} colSpan={1} bg='papayawhip' />
        //     <GridItem rowSpan={1} colSpan={1} bg='papayawhip' />
        // </Grid>
    )
}
export default Latihan