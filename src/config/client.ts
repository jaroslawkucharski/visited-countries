import axios from 'axios'

import { APP_API_URL } from 'constants/env'

export const client = axios.create({
	baseURL: APP_API_URL,
})

client.interceptors.response.use(
	({ data }) => data,
	({ response }) => Promise.reject(response),
)
