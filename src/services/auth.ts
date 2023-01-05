import { authToken } from 'config/authToken'
import { client } from 'config/client'

export const loginRequest = (identifier: string, password: string) =>
	client.post(
		`/api/auth/local`,
		{
			identifier,
			password,
		},
		authToken,
	)
