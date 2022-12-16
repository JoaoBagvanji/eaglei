import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.0.194:4000',
    responseType:'json'
})

export default api;