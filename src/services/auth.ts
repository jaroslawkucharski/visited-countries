import { apiAuthorization } from 'config/apiAuthorization'
import { client } from 'config/client'

export const loginRequest = (identifier: string, password: string) =>
	client.post(
		`/api/auth/local`,
		{
			identifier,
			password,
		},
		apiAuthorization,
	)