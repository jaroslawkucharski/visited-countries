import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCountries } from 'services/countries'

export interface Countries {
	data: {
		name: {
			common: string
		}
	}
}

interface CountriesState {
	isLoading: boolean
	data: Countries[]
	isError: boolean
}

const initialState: CountriesState = {
	isLoading: true,
	data: [],
	isError: false,
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
				state.isLoading = true
				state.isError = false
			})
			.addCase(fetchCountries.fulfilled, (state, action) => {
				state.isLoading = false
				state.isError = false
				state.data = [...state.data, action.payload]
			})
			.addCase(fetchCountries.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
			}),
})

export default CountriesSlice.reducer
