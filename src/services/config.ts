import { API_URL, ENVIRONMENT } from 'constants/api'

export const apiUrl = () =>
	process.env.ENVIRONMENT === ENVIRONMENT.PRODUCTION ? API_URL.PRODUCTION : API_URL.DEVELOPMENT

export const authToken = () => ({
	headers: {
		Authorization: `${process.env.AUTH_TOKEN_TYPE} ${process.env.AUTH_TOKEN}`,
	},
})
