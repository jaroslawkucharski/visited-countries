import { auth } from 'config/firebase'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from 'routes'

import { toastNotify } from 'helpers/toastNotify'

type AuthUser = object | null

interface AuthContextType {
	userAuth: AuthUser
	singIn: (email: string, password: string) => Promise<string | number | void>
	logout: () => Promise<string | number | void>
}

const AuthContext = createContext<AuthContextType | null>(null)

const useAuthUser = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	const [userAuth, setUserAuth] = useState<AuthUser>(null)
	const [isLoading, setLoading] = useState<boolean>(true)

	const singIn = (email: string, password: string) =>
		signInWithEmailAndPassword(auth, email, password)
			.then(() => navigate(ROUTES.DASHBOARD))
			.catch(() => toastNotify(t('toasts.error'), 'error'))

	const logout = () =>
		signOut(auth)
			.then(() => navigate(ROUTES.SIGNIN))
			.catch(() => toastNotify(t('toasts.error'), 'error'))

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setUserAuth(user)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	return {
		value: {
			userAuth,
			singIn,
			logout,
		},
		isLoading,
	}
}

type ProviderProps = {
	children: ReactNode
}

export const AuthProvider: FC<ProviderProps> = ({ children }) => {
	const { value, isLoading } = useAuthUser()

	return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>
}

export const useAuthContext = () => {
	const value = useContext(AuthContext)

	if (!value) {
		throw new Error('useAuthContext must be used inside AuthProvider!')
	}

	return value
}
