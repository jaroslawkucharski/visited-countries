import { configureStore } from '@reduxjs/toolkit'

import { CountriesSlice } from './features/countriesSlice'

export const store = configureStore({
	reducer: {
		countries: CountriesSlice.reducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
