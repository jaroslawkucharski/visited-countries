// "What's new" entries shown under the bell icon, newest first.
// Add a new entry at the top with a unique id to show the unread dot to users again.
export interface ChangelogEntry {
	id: string
	date: string
	title: { pl: string; en: string }
	items: { pl: string[]; en: string[] }
}

export const CHANGELOG: ChangelogEntry[] = [
	{
		id: '2026-10-app-update',
		date: '2026-10-13',
		title: {
			pl: 'Aktualizacja aplikacji',
			en: 'App update',
		},
		items: {
			pl: [
				'Aplikacja znowu działa: lista krajów jest wbudowana w aplikację.',
				'Nowe zdjęcia profilowe, które możesz znowu przesyłać.',
				'Przy dodawaniu kraju możesz podać datę wizyty, a statystyki „W tym roku” liczą się same.',
				'Nowe Ustawienia (motyw i język) oraz okno Pomocy.',
				'Szybsze ładowanie dzięki lżejszym obrazom.',
			],
			en: [
				'The app works again: the country list is now built in.',
				'Profile pictures are back, you can upload them again.',
				'You can set a visit date when adding a country, and the “This year” stats update automatically.',
				'New Settings (theme and language) and Help window.',
				'Faster loading thanks to lighter images.',
			],
		},
	},
]
