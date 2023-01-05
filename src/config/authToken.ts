import { AUTH_TOKEN, AUTH_TOKEN_TYPE } from 'constants/env'

export const authToken = {
	headers: {
		Authorization: `${AUTH_TOKEN_TYPE} ${AUTH_TOKEN}`,
	},
}
