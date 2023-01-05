import { useThemeColorContext } from 'context/ThemeContext'
import { PrivateRoute } from 'layouts'
import { Dashboard, Login, Register } from 'pages'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ROUTES } from 'routes'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/GlobalStyles'

const App = () => {
	const { theme, themeColor } = useThemeColorContext()

	return (
		<ThemeProvider theme={themeColor}>
			<GlobalStyles />

			<ToastContainer theme={theme} />

			<Routes>
				<Route
					path={ROUTES.SIGNIN}
					element={<Login />}
				/>

				<Route
					path={ROUTES.SIGNUP}
					element={<Register />}
				/>

				<Route
					path={ROUTES.DASHBOARD}
					element={<PrivateRoute component={<Dashboard />} />}
				/>
			</Routes>
		</ThemeProvider>
	)
}

export default App
