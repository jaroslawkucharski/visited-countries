/* eslint-disable import/no-extraneous-dependencies */
import { render as rtlRender } from '@testing-library/react'
import { ThemeColorProvider } from 'context/ThemeContext'
import { ComponentType, ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { darkTheme } from 'styles/theme'

const render = (ui: ReactElement) => {
	const AllProviders = ({ children }: { children: ReactNode }) => (
		<ThemeColorProvider>
			<ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
		</ThemeColorProvider>
	)

	return rtlRender(ui, { wrapper: AllProviders as ComponentType })
}

export * from '@testing-library/react'

export { render }
