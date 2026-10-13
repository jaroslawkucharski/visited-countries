import { auth, database } from 'config/firebase'
import { get, ref } from 'firebase/database'
import {
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useLayoutEffect,
	useState,
} from 'react'
import { useTranslation } from 'react-i18next'

import { useCountries } from 'hooks/useCountries'

import { LOCALES } from 'constants/locales'

export interface VisitedCountriesType {
	country: string
	uid: string
	visitedAt?: string
}

export interface CountriesListType {
	nameEN?: string
	namePL?: string
	icon?: string
	code?: string
}

interface CountriesListContextType {
	countries: CountriesListType[]
	visitedCountries: VisitedCountriesType[]
	setVisitedCountries: Dispatch<SetStateAction<VisitedCountriesType[]>>
	visitedList: (CountriesListType | undefined)[]
	unvisitedList: (CountriesListType | undefined)[]
	fetchCountriesList: () => void
	favorites: string[]
	favoriteList: (CountriesListType | undefined)[]
	isFavorite: (code?: string) => boolean
}

const CountriesListContext = createContext<CountriesListContextType | null>(null)

const useCountriesList = () => {
	const { data } = useCountries()

	const { i18n } = useTranslation()
	const isEnglish = i18n.language === LOCALES.EN

	const countries = data
		?.map(item => ({
			nameEN: item.name.common,
			namePL: item.translations.pol.common,
			icon: item.flag,
			code: item.cca3,
		}))
		.sort((a, b) =>
			(isEnglish ? a.nameEN : a.namePL).localeCompare(
				isEnglish ? b.nameEN : b.namePL,
				i18n.language,
			),
		)

	const [visitedCountries, setVisitedCountries] = useState<VisitedCountriesType[]>([])

	const visitedList = visitedCountries.map(({ uid }) => countries.find(({ code }) => code === uid))

	const unvisitedList = countries?.filter(
		({ code }) => !visitedCountries.find(({ uid }) => code === uid),
	)

	const [favorites, setFavorites] = useState<string[]>([])

	const favoriteList = favorites
		.map(favorite => countries?.find(({ code }) => code === favorite))
		.filter(Boolean)

	const isFavorite = (code?: string) => !!code && favorites.includes(code)

	const fetchCountriesList = () => {
		const tasksRef = ref(database, `users/${auth.currentUser?.uid}/countries`)
		const favoritesRef = ref(database, `users/${auth.currentUser?.uid}/favorites`)

		get(tasksRef)
			.then(snapshot => {
				setVisitedCountries(Object.values(snapshot.val()))
			})
			.catch(() => setVisitedCountries([]))

		get(favoritesRef)
			.then(snapshot => {
				setFavorites(Object.keys(snapshot.val() || {}))
			})
			.catch(() => setFavorites([]))
	}

	useLayoutEffect(() => {
		fetchCountriesList()
	}, [])

	return {
		value: {
			countries,
			visitedCountries,
			setVisitedCountries,
			visitedList,
			unvisitedList,
			fetchCountriesList,
			favorites,
			favoriteList,
			isFavorite,
		},
	}
}

type ProviderProps = {
	children: ReactNode
}

export const CountriesListProvider: FC<ProviderProps> = ({ children }) => {
	const { value } = useCountriesList()

	return <CountriesListContext.Provider value={value}>{children}</CountriesListContext.Provider>
}

export const useCountriesListContext = () => {
	const value = useContext(CountriesListContext)

	if (!value) {
		throw new Error('useCountriesList must be used inside CountriesListProvider!')
	}

	return value
}
