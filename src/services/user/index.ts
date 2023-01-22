import { auth, database, storage } from 'config/firebase'
import { updateProfile } from 'firebase/auth'
import { ref as databaseRef, remove, set } from 'firebase/database'
import { getDownloadURL, ref as storageRef, uploadBytes } from 'firebase/storage'
import i18next from 'i18next'
import { toastNotify } from 'utils/toastNotify'

import { ERRORS } from 'constants/errors'

// Upload country
export const setCountry = (uid: string, country: string) =>
	set(databaseRef(database, `/${auth.currentUser?.uid}/${uid}`), {
		country,
		uid,
	})

// Remove country
export const removeCountry = (uid: string) =>
	remove(databaseRef(database, `/${auth.currentUser?.uid}/${uid}`))

type UpdateUserProfileTypes = {
	displayName?: string
	photoURL?: string
}

// Update user profile
export const updateUserProfile = async (args: UpdateUserProfileTypes) => {
	try {
		if (auth?.currentUser !== null) {
			await updateProfile(auth.currentUser, args)
		}
	} catch ({ code }) {
		toastNotify(i18next.t(ERRORS[code as string] || 'toasts.error'), 'error')
	}
}

// Upload user avatar
export const setUserAvatar = async (file: Blob) => {
	const fileRef = storageRef(storage, `images/avatar_${auth.currentUser?.uid}`)

	await uploadBytes(fileRef, file)

	const photoURL = await getDownloadURL(fileRef)

	if (auth?.currentUser !== null) {
		updateUserProfile({ photoURL })
	}
}