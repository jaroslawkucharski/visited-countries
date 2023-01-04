import { TOKENS } from 'constants/tokens'

type SetTokenTypes = {
	jwtToken: string
	rememberMe?: boolean
}

export const getToken = () => {
	return localStorage.getItem('token') || sessionStorage.getItem('token')
}

export const setToken = ({ jwtToken, rememberMe = false }: SetTokenTypes) =>
	rememberMe
		? localStorage.setItem(TOKENS.APP_TOKEN, jwtToken)
		: sessionStorage.setItem(TOKENS.APP_TOKEN, jwtToken)

export const removeToken = () => {
	localStorage.removeItem('token')
	sessionStorage.removeItem('token')
}
