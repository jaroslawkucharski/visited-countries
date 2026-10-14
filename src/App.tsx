import { AuthProvider } from 'context/AuthContext'
import { CountriesListProvider } from 'context/CountriesListContext'
import { useThemeColorContext } from 'context/ThemeContext'
import { ErrorBoundary, Menu, TopBar } from 'layouts'
import { Routes } from 'react-router-dom'
import { appRoutes } from 'routes'
import { ThemeProvider } from 'styled-components'

import { Theme } from 'styles/ThemeProvider'

const App = () => {
	const { theme, themeColor } = useThemeColorContext()

	return (
		<Theme theme={theme}>
			<ThemeProvider theme={themeColor}>
				<ErrorBoundary>
					<AuthProvider>
						<CountriesListProvider>
							<TopBar />

							<Menu />

							<Routes>{appRoutes}</Routes>
						</CountriesListProvider>
					</AuthProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</Theme>
	)
}

export default App
