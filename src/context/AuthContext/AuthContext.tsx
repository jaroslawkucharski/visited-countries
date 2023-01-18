import { auth, database, storage } from 'config/firebase'
import {
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword,
	signOut,
	updateProfile,
} from 'firebase/auth'
import { ref as databaseRef, remove, set } from 'firebase/database'
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage'
import { FC, ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { toastNotify } from 'utils/toastNotify'

import { ERRORS } from 'constants/errors'
import { ROUTES } from 'constants/routes'

type AuthUser = object | null

interface AuthContextType {
	userAuth: AuthUser
	singUp: (displayName: string, email: string, password: string) => Promise<string | number | void>
	singIn: (email: string, password: string) => Promise<string | number | void>
	logout: () => Promise<string | number | void>
	resetPassword: (email: string) => Promise<string | number | void>
	setCountry: (uid: string, country: string) => Promise<string | number | void>
	removeCountry: (uid: string) => Promise<string | number | void>
	setUserAvatar: (file: Blob) => Promise<string | number | void>
}

const AuthContext = createContext<AuthContextType | null>(null)

const useAuthUser = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()

	const [userAuth, setUserAuth] = useState<AuthUser>(null)
	const [isLoading, setLoading] = useState<boolean>(true)

	// Sign up user
	const singUp = async (displayName: string, email: string, password: string) => {
		try {
			await createUserWithEmailAndPassword(auth, email, password)

			if (auth?.currentUser !== null) {
				await updateProfile(auth.currentUser, { displayName })
			}

			toastNotify(t('register.toast.success', { displayName }), 'success')

			navigate(ROUTES.DASHBOARD)
		} catch ({ code }) {
			toastNotify(t(ERRORS[code as string] || 'toasts.error'), 'error')
		}
	}

	// Sign in user
	const singIn = async (email: string, password: string) => {
		try {
			await signInWithEmailAndPassword(auth, email, password)

			if (auth?.currentUser !== null) {
				toastNotify(
					t('login.toast.success', { displayName: auth?.currentUser.displayName }),
					'success',
				)
			}

			navigate(ROUTES.DASHBOARD)
		} catch ({ code }) {
			toastNotify(t(ERRORS[code as string] || 'toasts.error'), 'error')
		}
	}

	// Logout user
	const logout = async () => {
		try {
			await signOut(auth)

			navigate(ROUTES.SIGNIN)
		} catch ({ code }) {
			toastNotify(t(ERRORS[code as string] || 'toasts.error'), 'error')
		}
	}

	// Reset user password
	const resetPassword = async (email: string) => {
		try {
			await sendPasswordResetEmail(auth, email)

			navigate(ROUTES.SIGNIN)
		} catch ({ code }) {
			toastNotify(t(ERRORS[code as string] || 'toasts.error'), 'error')
		}
	}

	// Upload country
	const setCountry = async (uid: string, country: string) => {
		try {
			await set(databaseRef(database, `/${auth.currentUser?.uid}/${uid}`), {
				country,
				uid,
			})

			navigate(ROUTES.SIGNIN)
		} catch ({ code }) {
			toastNotify(t(ERRORS[code as string] || 'toasts.error'), 'error')
		}
	}

	// Remove country
	const removeCountry = async (uid: string) => {
		try {
			await remove(databaseRef(database, `/${auth.currentUser?.uid}/${uid}`))

			navigate(ROUTES.SIGNIN)
		} catch ({ code }) {
			toastNotify(t(ERRORS[code as string] || 'toasts.error'), 'error')
		}
	}

	// Upload user avatar
	const setUserAvatar = async (file: Blob) => {
		try {
			const fileRef = storageRef(storage, `images/avatar_${auth.currentUser?.uid}`)

			await uploadBytes(fileRef, file)

			const photoURL = await getDownloadURL(fileRef)

			if (auth?.currentUser !== null) {
				await updateProfile(auth.currentUser, { photoURL })
			}
		} catch ({ code }) {
			toastNotify(t(ERRORS[code as string] || 'toasts.error'), 'error')
		}
	}

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
			singUp,
			singIn,
			logout,
			resetPassword,
			setCountry,
			removeCountry,
			setUserAvatar,
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
