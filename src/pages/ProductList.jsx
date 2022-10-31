import { Button, Container, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Table, Tbody, Td, Text, Th, Thead, Tr, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { jsonServerApi } from '../api'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const [products, setProducts] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await jsonServerApi.get('/products')

            setProducts(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    const renderProducts = () => {
        return products.map((val) => {
            return (
                <Tr>
                    <Td>{val.product_name}</Td>
                    <Td>{new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                    }).format(val.price)}</Td>
                    <Td>{val.stock}</Td>
                    <Td>
                        <Link to={`/products/${val.id}`}>
                            <Button mx={'1'} colorScheme={'green'}>
                                Edit
                            </Button>
                        </Link>
                        <Button mx={'1'} colorScheme={'red'}
                            onClick={() => deleteBtnHandler(val.id)}
                        >
                            Delete
                        </Button>
                    </Td>
                </Tr>
            )
        })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const toast = useToast()

    const formik = useFormik({
        initialValues: {
            product_name: "",
            price: 0,
            stock: 0,
        },

        onSubmit: async (values) => {
            try {
                const { product_name, price, stock } = values

                let newProduct = {
                    product_name: product_name,
                    price: price,
                    stock: stock,
                }
                await jsonServerApi.post('/products', newProduct)

                fetchProducts()
                toast({ title: 'Product Added', status: 'success' })

            } catch (err) {
                toast({ title: 'Network Error', status: 'error' })
                console.log(err)
            }
        },
        validationSchema: Yup.object({
            product_name: Yup.string().required(),
            price: Yup.number().required().min(1000).max(100000),
            stock: Yup.number().required().min(1),
        }),
        validateOnChange: false,
    })

    const formChangeHandler = ({ target }) => {
        const { name, value } = target

        formik.setFieldValue(name, value)
    }

    const deleteBtnHandler = async (id) => {
        try {
            await jsonServerApi.delete(`/products/${id}`)
            fetchProducts()
            toast({ title: 'Product deleted', status: 'info' })
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <Container maxW={'container.lg'} height={'650px'}>
            <Text fontWeight={'bold'} fontSize={'4xl'} mb={'12'}>
                Product List
            </Text>
            <Grid templateColumns={'repeat(3,1fr)'} columnGap={'4'}>
                <GridItem>
                    <FormControl isInvalid={formik.errors.product_name}>
                        <FormLabel>Product Name</FormLabel>
                        <Input type={'text'} name={'product_name'} onChange={formChangeHandler}
                        />
                        <FormErrorMessage>{formik.errors.product_name}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl isInvalid={formik.errors.price}>
                        <FormLabel>Product Price</FormLabel>
                        <Input type={'number'} name={'price'} onChange={formChangeHandler}
                        />
                        <FormErrorMessage>{formik.errors.price}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem>
                    <FormControl isInvalid={formik.errors.stock}>
                        <FormLabel>Product Stock</FormLabel>
                        <Input type={'number'} name={'stock'} onChange={formChangeHandler}
                        />
                        <FormErrorMessage>{formik.errors.stock}</FormErrorMessage>
                    </FormControl>
                </GridItem>
            </Grid>
            <Button
                my={'4'}
                colorScheme={'teal'}
                onClick={formik.handleSubmit}
                disabled={formik.isSubmitting}
            >
                Add Product
            </Button>

            <Table>
                <Thead>
                    <Tr>
                        <Th>Product Name</Th>
                        <Th>Price</Th>
                        <Th>Stock</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>{renderProducts()}</Tbody>
            </Table>
        </Container>
    )
}

export default ProductList