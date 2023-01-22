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
		addCountries: (
			state,
			action: PayloadAction<{
				data: {
					name: {
						common: string
					}
				}
			}>,
		) => {
			state.countries.push({
				data: action.payload.data,
			})
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchCountries.fulfilled, (state, action) => {
			state.countries.push(action.payload)
		})
	},
})

export default CountriesSlice.reducer
