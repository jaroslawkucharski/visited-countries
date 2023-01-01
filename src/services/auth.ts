import { authToken } from 'services/authToken'
import { post } from 'services/axios'

export const loginRequest = (identifier: string, password: string) =>
	post(
		'http://localhost:1337/api/auth/local',
		{
			identifier,
			password,
		},
		authToken,
	)
