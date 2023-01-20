import { auth } from 'config/firebase'
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react'

type AuthUser = object | null

interface AuthContextType {
	userAuth: AuthUser
}

const AuthContext = createContext<AuthContextType | null>(null)

const useAuthUser = () => {
	const [userAuth, setUserAuth] = useState<AuthUser>(null)
	const [isLoading, setLoading] = useState<boolean>(true)

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
