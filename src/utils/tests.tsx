/* eslint-disable import/no-extraneous-dependencies */
import { render as rtlRender, screen, waitFor } from '@testing-library/react'
import { ThemeColorProvider } from 'context/ThemeContext'
import { ComponentType, ReactElement, ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { describe, it, vi } from 'vitest'

import { darkTheme } from 'styles/theme'

import i18n from '../config/i18n'

const render = (ui: ReactElement) => {
	const AllProviders = ({ children }: { children: ReactNode }) => (
		<I18nextProvider i18n={i18n}>
			<MemoryRouter initialEntries={['/']}>
				<ThemeColorProvider>
					<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
				</ThemeColorProvider>
			</MemoryRouter>
		</I18nextProvider>
	)

	return rtlRender(ui, { wrapper: AllProviders as ComponentType })
}

export * from '@testing-library/react'

export { render, describe, it, vi, screen, waitFor }
