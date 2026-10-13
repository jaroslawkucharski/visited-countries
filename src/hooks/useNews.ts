import { auth, database } from 'config/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { onValue, ref, set, update } from 'firebase/database'
import { useEffect, useState } from 'react'

export interface NewsEntry {
	id: string
	date: string
	title: { pl: string; en: string }
	text: { pl: string; en: string }
}

type NewsData = Record<string, Omit<NewsEntry, 'id'>>

export const useNews = () => {
	const [news, setNews] = useState<NewsEntry[]>([])
	const [readIds, setReadIds] = useState<string[]>([])

	useEffect(() => {
		let unsubscribers: (() => void)[] = []

		const unsubscribe = () => {
			unsubscribers.forEach(callback => callback())
			unsubscribers = []
		}

		const unsubscribeAuth = onAuthStateChanged(auth, user => {
			unsubscribe()

			if (!user) {
				setNews([])
				setReadIds([])

				return
			}

			unsubscribers = [
				onValue(
					ref(database, 'news'),
					snapshot => {
						const data: NewsData = snapshot.val() || {}

						setNews(
							Object.entries(data)
								.map(([id, entry]) => ({ ...entry, id }))
								.sort((a, b) => b.date.localeCompare(a.date)),
						)
					},
					() => setNews([]),
				),
				onValue(
					ref(database, `users/${user.uid}/newsRead`),
					snapshot => setReadIds(Object.keys(snapshot.val() || {})),
					() => setReadIds([]),
				),
			]
		})

		return () => {
			unsubscribe()
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

	const unreadNews = news.filter(({ id }) => !readIds.includes(id))

	return { unreadNews, markAsRead, markAllAsRead }
}
