import { Theme } from '@jaroslaw91/novelui'
import { AuthProvider } from 'context/AuthContext'
import { CountriesListProvider } from 'context/CountriesListContext'
import { useThemeColorContext } from 'context/ThemeContext'
import { ErrorBoundary, Menu, TopBar } from 'layouts'
import { Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { appRoutes } from 'routes'
import { ThemeProvider } from 'styled-components'

const App = () => {
	const { theme, themeColor } = useThemeColorContext()

	return (
		<Theme theme={theme}>
			<ThemeProvider theme={themeColor}>
				<ErrorBoundary>
					<AuthProvider>
						<CountriesListProvider>
							<ToastContainer theme={theme} />
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
