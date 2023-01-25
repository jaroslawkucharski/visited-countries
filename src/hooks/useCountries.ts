import { useSelector } from 'react-redux'
import { Countries } from 'store/features/countriesSlice'
import { RootState } from 'store/store'

export const useCountries = () => {
	const data = useSelector<RootState>(state => state.countries.data[0]) as Countries[]
	const statusLoading = useSelector<RootState>(state => state.countries.statusLoading) as boolean
	const statusError = useSelector<RootState>(state => state.countries.statusError) as boolean

	return { data, statusLoading, statusError }
}
