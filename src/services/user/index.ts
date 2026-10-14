import { auth, database } from 'config/firebase'
import { updateEmail, updatePassword, updateProfile } from 'firebase/auth'
import { ref as databaseRef, remove, set } from 'firebase/database'
import { notifyError } from 'utils'

type UpdateUserProfileTypes = {
	displayName?: string
	photoURL?: string
}

export const setCountry = async (uid: string, country: string, visitedAt: string | null = null) => {
	const user = auth.currentUser

	await set(databaseRef(database, `users/${user?.uid}/countries/${uid}`), {
		country,
		uid,
		...(visitedAt ? { visitedAt } : {}),
	})

	await remove(databaseRef(database, `users/${user?.uid}/favorites/${uid}`))
}

export const setVisitDate = (uid: string, visitedAt: string | null) => {
	const user = auth.currentUser
	const visitedAtRef = databaseRef(database, `users/${user?.uid}/countries/${uid}/visitedAt`)

	return visitedAt ? set(visitedAtRef, visitedAt) : remove(visitedAtRef)
}

export const addFavorite = (uid: string) => {
	const user = auth.currentUser

	return set(databaseRef(database, `users/${user?.uid}/favorites/${uid}`), true)
}

export const removeFavorite = (uid: string) => {
	const user = auth.currentUser

	return remove(databaseRef(database, `users/${user?.uid}/favorites/${uid}`))
}

export const removeCountry = (uid: string) => {
	const user = auth.currentUser

	return remove(databaseRef(database, `users/${user?.uid}/countries/${uid}`))
}

export const updateUserProfile = async (args: UpdateUserProfileTypes) => {
	const user = auth.currentUser

	try {
		if (user !== null) {
			await updateProfile(user, args)
		}
	} catch (error) {
		notifyError(error)
	}
}

export const setUserAvatar = async (avatar: string) => {
	const user = auth.currentUser

	if (user !== null) {
		await set(databaseRef(database, `users/${user.uid}/avatar`), avatar)
	}
}

export const removeUserAvatar = async () => {
	const user = auth.currentUser

	if (user !== null) {
		await remove(databaseRef(database, `users/${user.uid}/avatar`))
	}
}

export const updateUserEmail = async (email: string) => {
	const user = auth.currentUser

	try {
		if (user !== null) {
			await updateEmail(user, email)
		}
	} catch (error) {
		notifyError(error)
	}
}

export const updateUserPassword = async (password: string) => {
	const user = auth.currentUser

	try {
		if (user !== null) {
			await updatePassword(user, password)
		}
	} catch (error) {
		notifyError(error)
	}
}

export const removeAccount = async () => {
	const user = auth.currentUser

	try {
		if (user !== null) {
			await remove(databaseRef(database, `users/${user?.uid}`))

			await user.delete()
		}
	} catch (error) {
		notifyError(error)
	}
}
