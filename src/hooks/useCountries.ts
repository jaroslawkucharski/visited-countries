import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

interface Country {
	name: {
		common: string
	}
	flag: string
	translations: {
		pol: {
			common: string
		}
	}
}

export const useCountries = () => {
	const isLoading = useSelector<RootState>(state => state.countries.isLoading) as boolean
	const data = useSelector<RootState>(state => state.countries.data) as [Country[]]
	const isError = useSelector<RootState>(state => state.countries.isError) as boolean

	return { isLoading, data, isError }
}
