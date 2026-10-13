import { auth, database } from 'config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { onValue, ref, set, update } from 'firebase/database'
import { useEffect, useState } from 'react'

// Ids of notifications the user has read (users/{uid}/newsRead/{id}), synced across devices
export const useReadNews = () => {
	const [readIds, setReadIds] = useState<string[]>([])

	useEffect(() => {
		let unsubscribeNews: (() => void) | undefined

		const unsubscribeAuth = onAuthStateChanged(auth, user => {
			unsubscribeNews?.()
			unsubscribeNews = undefined

			if (!user) {
				setReadIds([])

				return
			}

			unsubscribeNews = onValue(
				ref(database, `users/${user.uid}/newsRead`),
				snapshot => setReadIds(Object.keys(snapshot.val() || {})),
				() => setReadIds([]),
			)
		})

		return () => {
			unsubscribeNews?.()
			unsubscribeAuth()
		}
	}, [])

	const markAsRead = (id: string) => {
		const user = auth.currentUser

		setReadIds(prev => [...prev, id])

		return user ? set(ref(database, `users/${user.uid}/newsRead/${id}`), true) : undefined
	}

	const markAllAsRead = (ids: string[]) => {
		const user = auth.currentUser

		setReadIds(prev => [...new Set([...prev, ...ids])])

		return user
			? update(
					ref(database, `users/${user.uid}/newsRead`),
					Object.fromEntries(ids.map(id => [id, true])),
			  )
			: undefined
	}

	return { readIds, markAsRead, markAllAsRead }
}
