import { auth, database } from 'config/firebase'
import { updateEmail, updatePassword, updateProfile } from 'firebase/auth'
import { ref as databaseRef, remove, set } from 'firebase/database'
import i18next from 'i18next'
import { toastNotify } from 'utils'

import { ERRORS } from 'constants/errors'

// Update user profile props
type UpdateUserProfileTypes = {
	displayName?: string
	photoURL?: string
}

// Upload country
export const setCountry = (uid: string, country: string) => {
	const user = auth.currentUser

	set(databaseRef(database, `users/${user?.uid}/countries/${uid}`), {
		country,
		uid,
	})
}

// Remove country
export const removeCountry = (uid: string) => {
	const user = auth.currentUser

	remove(databaseRef(database, `users/${user?.uid}/countries/${uid}`))
}

// Update user profile
export const updateUserProfile = async (args: UpdateUserProfileTypes) => {
	const user = auth.currentUser

	try {
		if (user !== null) {
			await updateProfile(user, args)
		}
	} catch ({ code }: any) {
		toastNotify(i18next.t(ERRORS[code as string] || 'toasts.error'), 'error')
	}
}

// Upload user avatar (stored as a base64 data URL in Realtime Database, Firebase Storage requires a paid plan)
export const setUserAvatar = async (avatar: string) => {
	const user = auth.currentUser

	if (user !== null) {
		await set(databaseRef(database, `users/${user.uid}/avatar`), avatar)
	}
}

// Remove user avatar
export const removeUserAvatar = async () => {
	const user = auth.currentUser

	if (user !== null) {
		await remove(databaseRef(database, `users/${user.uid}/avatar`))
	}
}

// Update email
export const updateUserEmail = async (email: string) => {
	const user = auth.currentUser

	try {
		if (user !== null) {
			await updateEmail(user, email)
		}
	} catch ({ code }: any) {
		toastNotify(i18next.t(ERRORS[code as string] || 'toasts.error'), 'error')
	}
}

// Update password
export const updateUserPassword = async (password: string) => {
	const user = auth.currentUser

	try {
		if (user !== null) {
			await updatePassword(user, password)
		}
	} catch ({ code }: any) {
		toastNotify(i18next.t(ERRORS[code as string] || 'toasts.error'), 'error')
	}
}

// Remove account
export const removeAccount = async () => {
	const user = auth.currentUser

	try {
		if (user !== null) {
			await remove(databaseRef(database, `users/${user?.uid}`))

			await user.delete()
		}
	} catch ({ code }: any) {
		toastNotify(i18next.t(ERRORS[code as string] || 'toasts.error'), 'error')
	}
}
