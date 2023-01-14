import { Loader } from 'components'
import { useThemeColorContext } from 'context/ThemeContext'
import { Menu, PrivateRoute, TopBar } from 'layouts'
import { Profile } from 'pages'
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { ROUTES } from 'routes'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from 'styles/GlobalStyles'

const Login = lazy(async () => ({
	default: (await import('pages')).Login,
}))

const Register = lazy(async () => ({
	default: (await import('pages')).Register,
}))

const Dashboard = lazy(async () => ({
	default: (await import('pages')).Dashboard,
}))

const App = () => {
	const { theme, themeColor } = useThemeColorContext()

	return (
		<ThemeProvider theme={themeColor}>
			<GlobalStyles />

			<ToastContainer theme={theme} />

			<TopBar />

			<Menu />

			<Routes>
				<Route
					path={ROUTES.SIGNIN}
					element={
						<Suspense fallback={<Loader type="website" />}>
							<Login />
						</Suspense>
					}
				/>

				<Route
					path={ROUTES.SIGNUP}
					element={
						<Suspense fallback={<Loader type="website" />}>
							<Register />
						</Suspense>
					}
				/>

				<Route
					path={ROUTES.DASHBOARD}
					element={
						<PrivateRoute
							component={
								<Suspense fallback={<Loader type="website" />}>
									<Dashboard />
								</Suspense>
							}
						/>
					}
				/>

				<Route
					path={ROUTES.PROFILE}
					element={
						<PrivateRoute
							component={
								<Suspense fallback={<Loader type="website" />}>
									<Profile />
								</Suspense>
							}
						/>
					}
				/>
			</Routes>
		</ThemeProvider>
	)
}

export default App
