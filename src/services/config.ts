import { API_URL } from 'constants/api'

export const apiUrl = import.meta.env.PROD ? API_URL.PRODUCTION : API_URL.DEVELOPMENT

export const authToken = {
	headers: {
		Authorization: `${import.meta.env.VITE_AUTH_TOKEN_TYPE} ${import.meta.env.VITE_AUTH_TOKEN}`,
	},
}
