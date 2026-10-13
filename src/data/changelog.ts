// Notifications shown under the bell icon, newest first.
// Each entry is marked as read separately (users/{uid}/newsRead/{id}), so add new entries with a unique id.
export interface ChangelogEntry {
	id: string
	date: string
	title: { pl: string; en: string }
	text: { pl: string; en: string }
}

const date = '2026-10-13'

export const CHANGELOG: ChangelogEntry[] = [
	{
		id: '2026-10-search',
		date,
		title: { pl: 'Nowa wyszukiwarka', en: 'New search' },
		text: {
			pl: 'Wpisz nazwę kraju, a listy poniżej od razu się przefiltrują. Kraj dodasz plusikiem albo sercem do ulubionych.',
			en: 'Type a country name and the lists below are filtered right away. Add it with the plus or the heart.',
		},
	},
	{
		id: '2026-10-favorites',
		date,
		title: { pl: 'Ulubione kraje', en: 'Favorite countries' },
		text: {
			pl: 'Kraje, które chcesz odwiedzić, dodasz sercem na liście albo z mapy. Znajdziesz je pod sercem na górnym pasku.',
			en: 'Add countries you want to visit with the heart in the list or from the map. Find them under the heart in the top bar.',
		},
	},
	{
		id: '2026-10-visit-dates',
		date,
		title: { pl: 'Daty wizyt', en: 'Visit dates' },
		text: {
			pl: 'Przy dodawaniu kraju podasz miesiąc i rok wizyty, a datę zmienisz ołówkiem na liście odwiedzonych. Na tej podstawie liczymy „W tym roku”.',
			en: 'Set the month and year of your visit when adding a country, and change it with the pencil in the visited list. “This year” stats are based on it.',
		},
	},
	{
		id: '2026-10-map-tooltip',
		date,
		title: { pl: 'Nazwy krajów na mapie', en: 'Country names on the map' },
		text: {
			pl: 'Najedź kursorem na kraj na mapie, żeby zobaczyć jego nazwę.',
			en: 'Hover over a country on the map to see its name.',
		},
	},
	{
		id: '2026-10-settings-help',
		date,
		title: { pl: 'Ustawienia i Pomoc', en: 'Settings and Help' },
		text: {
			pl: 'Motyw i język zmienisz w Ustawieniach. Jeśli masz pytania, zajrzyj do Pomocy pod znakiem zapytania.',
			en: 'Change the theme and language in Settings. If you have questions, open Help under the question mark.',
		},
	},
	{
		id: '2026-10-avatars',
		date,
		title: { pl: 'Zdjęcia profilowe wróciły', en: 'Profile pictures are back' },
		text: {
			pl: 'Możesz znowu przesłać swoje zdjęcie w profilu.',
			en: 'You can upload your picture in your profile again.',
		},
	},
	{
		id: '2026-10-app-works',
		date,
		title: { pl: 'Aplikacja znowu działa', en: 'The app works again' },
		text: {
			pl: 'Lista krajów jest teraz wbudowana w aplikację, a obrazy są lżejsze, więc wszystko ładuje się szybciej.',
			en: 'The country list is now built into the app and images are lighter, so everything loads faster.',
		},
	},
]
