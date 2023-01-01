import { post } from 'services/axios'
import { apiUrl, authToken } from 'services/config'

export const loginRequest = (identifier: string, password: string) =>
	post(
		`${apiUrl}/api/auth/local`,
		{
			identifier,
			password,
		},
		authToken,
	)
