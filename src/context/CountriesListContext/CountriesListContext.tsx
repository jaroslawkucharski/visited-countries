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

import { useCountries } from 'hooks/useCountries'

export interface VisitedCountriesType {
	country: string
	uid: string
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
}

const CountriesListContext = createContext<CountriesListContextType | null>(null)

const useCountriesList = () => {
	const { data } = useCountries()

	const countries = data?.map(item => ({
		nameEN: item.name.common,
		namePL: item.translations.pol.common,
		icon: item.flag,
		code: item.cca3,
	}))

	const [visitedCountries, setVisitedCountries] = useState<VisitedCountriesType[]>([])

	const visitedList = visitedCountries.map(({ uid }) => countries.find(({ code }) => code === uid))

	const unvisitedList = countries?.filter(
		({ code }) => !visitedCountries.find(({ uid }) => code === uid),
	)

	const fetchCountriesList = () => {
		const tasksRef = ref(database, `users/${auth.currentUser?.uid}/countries`)

		get(tasksRef)
			.then(snapshot => {
				setVisitedCountries(Object.values(snapshot.val()))
			})
			.catch(() => setVisitedCountries([]))
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
