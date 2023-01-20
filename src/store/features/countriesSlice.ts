import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCountries } from 'services/countries'

export interface Countries {
	id: number
	name: string
}

interface CountriesState {
	countries: Countries[]
}

const initialState: CountriesState = {
	countries: [],
}

export const fetchCountries = createAsyncThunk('countries/fetch', async () => {
	const data = await await getCountries()

	return data
})

export const CountriesSlice = createSlice({
	name: 'countries',
	initialState,
	reducers: {
		addCountries: (state, action: PayloadAction<{ name: string }>) => {
			state.countries.push({
				id: state.countries.length,
				name: action.payload.name,
			})
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchCountries.fulfilled, (state, action) => {
			// TODO types fixed
			state.countries.push(action.payload)
		})
	},
})

export default CountriesSlice.reducer
