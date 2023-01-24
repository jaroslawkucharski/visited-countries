import { Loader } from 'components'
import { auth } from 'config/firebase'
import { FC, ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchCountries } from 'store/features/countriesSlice'
import { AppDispatch } from 'store/store'

import { useCountries } from 'hooks/useCountries'

type AuthUser = object | null

interface AuthContextType {
	userAuth: AuthUser
}

const AuthContext = createContext<AuthContextType | null>(null)

const useAuthUser = () => {
	const dispatch = useDispatch<AppDispatch>()
	const { isLoading: isLoadingCountries } = useCountries()

	const [userAuth, setUserAuth] = useState<AuthUser>(null)
	const [isLoading, setLoading] = useState<boolean>(true)

	const countriesLoading = userAuth ? isLoadingCountries : false

	const fetchData = useCallback(() => {
		dispatch(fetchCountries())
	}, [dispatch])

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setUserAuth(user)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	useEffect(() => {
		if (userAuth) {
			fetchData()
		}
	}, [userAuth, fetchData])

	return {
		value: {
			userAuth,
		},
		isLoading,
		countriesLoading,
	}
}

type ProviderProps = {
	children: ReactNode
}

export const AuthProvider: FC<ProviderProps> = ({ children }) => {
	const { value, isLoading, countriesLoading } = useAuthUser()

	return (
		<AuthContext.Provider value={value}>
			{!isLoading && !countriesLoading ? children : <Loader type="website" />}
		</AuthContext.Provider>
	)
}

export const useAuthContext = () => {
	const value = useContext(AuthContext)

	if (!value) {
		throw new Error('useAuthContext must be used inside AuthProvider!')
	}

	return value
}
