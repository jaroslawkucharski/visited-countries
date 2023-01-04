import { useThemeColorContext } from 'context/ThemeContext'
import { Login, Register } from 'pages'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ROUTES } from 'routes'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/GlobalStyles'

import { PrivateRoute } from './layouts'

const App = () => {
	const { theme, themeColor } = useThemeColorContext()

	return (
		<ThemeProvider theme={themeColor}>
			<Router>
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
						element={<PrivateRoute />}
					/>
				</Routes>
			</Router>
		</ThemeProvider>
	)
}

export default App
