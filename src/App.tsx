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

			<ToastContainer theme={theme} />

			<TopBar />

			<Menu />

			<Routes>{appRoutes}</Routes>
		</ThemeProvider>
	)
}

export default App
