import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  })

export const jsonServerApi = axios.create({
    baseURL: 'http://localhost:1000'
})
