import axios from 'axios'

export const client = axios.create({})

client.interceptors.response.use(
	({ data }) => data,
	({ response }) => Promise.reject(response),
)
