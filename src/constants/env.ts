import { API_URL } from 'constants/api'

const APP_API_URL = import.meta.env.PROD ? API_URL.PRODUCTION : API_URL.DEVELOPMENT
const AUTH_TOKEN_TYPE = import.meta.env.VITE_AUTH_TOKEN_TYPE
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN

export { APP_API_URL, AUTH_TOKEN_TYPE, AUTH_TOKEN }
