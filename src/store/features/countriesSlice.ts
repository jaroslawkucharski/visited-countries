/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCountries } from 'services/countries'

export interface Countries {
	name: {
		common: string
	}
	flag: string
	translations: {
		pol: {
			common: string
		}
	}
	cca3: string
}

interface CountriesState {
	data: Countries[]
	statusLoading: boolean
	statusError: boolean
}

const initialState: CountriesState = {
	data: [],
	statusLoading: true,
	statusError: false,
}

export const fetchCountries = createAsyncThunk('countries/fetch', async () => {
	const data = await getCountries()

	return data
})

export const CountriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {},
	extraReducers: builder =>
		builder
			.addCase(fetchCountries.pending, state => {
				state.statusLoading = true
				state.statusError = false
			})
			.addCase(fetchCountries.fulfilled, (state, action) => {
				state.statusLoading = false
				state.statusError = false
				state.data = [...state.data, action.payload] as Countries[]
			})
			.addCase(fetchCountries.rejected, state => {
				state.statusLoading = false
				state.statusError = true
			}),
})

export default CountriesSlice.reducer
