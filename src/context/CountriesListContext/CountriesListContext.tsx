import { auth, database } from 'config/firebase'
import { get, ref } from 'firebase/database'
import {
	Dispatch,
	FC,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react'
import { Countries } from 'store/features/countriesSlice'

import { useCountries } from 'hooks/useCountries'

export interface VisitedCountriesType {
	country: string
	uid: string
}

interface CountriesListContextType {
	countries: Countries[]
	visitedCountries: VisitedCountriesType[]
	visitedList: (Countries | undefined)[]
	setVisitedCountries: Dispatch<SetStateAction<VisitedCountriesType[]>>
}

const CountriesListContext = createContext<CountriesListContextType | null>(null)

const useCountriesList = () => {
	const { data: countries } = useCountries()

	const [visitedCountries, setVisitedCountries] = useState<VisitedCountriesType[]>([])

	const visitedList = visitedCountries.map(({ country }) => {
		return countries.find(({ cca3 }) => cca3 === country && cca3)
	})

	useEffect(() => {
		const tasksRef = ref(database, `users/${auth.currentUser?.uid}/countries`)

		get(tasksRef).then(snapshot => {
			setVisitedCountries(Object.values(snapshot.val()))
		})
	}, [])

	return {
		value: {
			countries,
			visitedCountries,
			visitedList,
			setVisitedCountries,
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
