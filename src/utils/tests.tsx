import { configureStore } from '@reduxjs/toolkit'
import { RenderOptions, render as rtlRender, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AuthProvider } from 'context/AuthContext'
import { ThemeColorProvider } from 'context/ThemeContext'
import { ComponentType, PropsWithChildren, ReactElement, ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import { CountriesSlice } from 'store/features/countriesSlice'
import { ThemeProvider } from 'styled-components'
import { describe, it, vi } from 'vitest'

import { darkTheme } from 'styles/theme'

import i18n from '../config/i18n'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
	store?: any
}

const render = (
	ui: ReactElement,
	{
		store = configureStore({ reducer: { countries: CountriesSlice.reducer } }),
		...renderOptions
	}: ExtendedRenderOptions = {},
) => {
	const AppProviders = ({ children }: PropsWithChildren<{}>) => (
		<Provider store={store}>
			<I18nextProvider i18n={i18n}>
				<MemoryRouter initialEntries={['/']}>
					<ThemeColorProvider>
						<ThemeProvider theme={darkTheme}>
							<AuthProvider>{children}</AuthProvider>
						</ThemeProvider>
					</ThemeColorProvider>
				</MemoryRouter>
			</I18nextProvider>
		</Provider>
	)

	return rtlRender(ui, { wrapper: AppProviders as ComponentType, ...renderOptions })
}

export * from '@testing-library/react'

export { render, describe, it, vi, screen, waitFor, userEvent }
