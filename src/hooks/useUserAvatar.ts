import { auth, database } from 'config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { onValue, ref } from 'firebase/database'
import { useEffect, useState } from 'react'

// Live user avatar (base64 data URL stored in Realtime Database at users/{uid}/avatar)
export const useUserAvatar = () => {
	const [avatar, setAvatar] = useState<string | null>(null)

	useEffect(() => {
		let unsubscribeAvatar: (() => void) | undefined

		const unsubscribeAuth = onAuthStateChanged(auth, user => {
			unsubscribeAvatar?.()
			unsubscribeAvatar = undefined

			if (!user) {
				setAvatar(null)

				return
			}

			unsubscribeAvatar = onValue(
				ref(database, `users/${user.uid}/avatar`),
				snapshot => setAvatar(snapshot.val() || null),
				() => setAvatar(null),
			)
		})

		return () => {
			unsubscribeAvatar?.()
			unsubscribeAuth()
		}
	}, [])

	return avatar
}
