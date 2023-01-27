import { AuthProvider } from 'context/AuthContext'
import { CountriesListProvider } from 'context/CountriesListContext'
import { useThemeColorContext } from 'context/ThemeContext'
import { Menu, TopBar } from 'layouts'
import { Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { appRoutes } from 'routes'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/GlobalStyles'

const App = () => {
	const { theme, themeColor } = useThemeColorContext()

	return (
		<ThemeProvider theme={themeColor}>
			<GlobalStyles />

			<AuthProvider>
				<CountriesListProvider>
					<ToastContainer theme={theme} />

					<TopBar />

					<Menu />

					<Routes>{appRoutes}</Routes>
				</CountriesListProvider>
			</AuthProvider>
		</ThemeProvider>
	)
}

export default App
