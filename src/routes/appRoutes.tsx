import { Loader } from 'components'
import { ErrorFallback } from 'layouts'
import { Suspense, createElement, lazy } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { ROUTES } from 'constants/routes'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const Login = lazy(async () => ({
	default: (await import('pages')).Login,
}))

const Register = lazy(async () => ({
	default: (await import('pages')).Register,
}))

const PasswordReset = lazy(async () => ({
	default: (await import('pages')).PasswordReset,
}))

const Dashboard = lazy(async () => ({
	default: (await import('pages')).Dashboard,
}))

const DashboardList = lazy(async () => ({
	default: (await import('pages')).DashboardList,
}))

const Profile = lazy(async () => ({
	default: (await import('pages')).Profile,
}))

const PageNotFound = lazy(async () => ({
	default: (await import('pages')).PageNotFound,
}))

const routes = [
	{
		path: ROUTES.SIGNIN,
		route: PublicRoute,
		isOnlyForMobile: false,
		component: <Login />,
	},
	{
		path: ROUTES.SIGNUP,
		route: PublicRoute,
		isOnlyForMobile: false,
		component: <Register />,
	},
	{
		path: ROUTES.PASSWORD_RESET,
		route: PublicRoute,
		isOnlyForMobile: false,
		component: <PasswordReset />,
	},
	{
		path: ROUTES.DASHBOARD,
		route: PrivateRoute,
		isOnlyForMobile: false,
		component: <Dashboard />,
	},
	{
		path: ROUTES.DASHBOARD_LIST,
		route: PrivateRoute,
		isOnlyForMobile: true,
		component: (
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<DashboardList />
			</ErrorBoundary>
		),
	},
	{
		path: ROUTES.PROFILE,
		route: PrivateRoute,
		isOnlyForMobile: false,
		component: <Profile />,
	},
	{
		path: ROUTES.PAGE_NOT_FOUND,
		isOnlyForMobile: false,
		component: <PageNotFound />,
	},
]

export const appRoutes = routes.map(({ path, route, component, isOnlyForMobile }) => (
	<Route
		key={uuid()}
		path={path}
		element={
			route ? (
				createElement(route, {
					component: <Suspense fallback={<Loader type="website" />}>{component}</Suspense>,
					isOnlyForMobile,
				})
			) : (
				<Suspense fallback={<Loader type="website" />}>{component}</Suspense>
			)
		}
	/>
))
